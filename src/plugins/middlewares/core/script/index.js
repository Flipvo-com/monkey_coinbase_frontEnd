// Import necessary modules
import fs from 'fs';
import path from 'path';
import chalk from 'chalk'; // Import chalk
import ora from 'ora'; // Import ora for loading spinner
import figures from 'figures'; // Import figures for icons


// Get arguments from the command line
const args = process.argv.slice(2);
const command = args[0];
const name = args[1];

// Validate command usage
if (command !== 'add' || !name) {
    console.error('Usage: middleware add <name>');
    process.exit(1);
}

const projectRoot = process.cwd();
// Define the target directory for middleware files
const targetDirectory = path.join(projectRoot, 'src', 'router', 'middleware'); // Absolute path to the target directory
const registryFilePath = path.join(projectRoot, 'src', 'plugins', 'middlewares', 'core', 'middlewareRegistry.ts'); // Path to the middleware registry


// Define the file path for the new middleware
const filePath = path.join(targetDirectory, `${name}.ts`);

// Check if the middleware file already exists
if (fs.existsSync(filePath)) {
    console.error(chalk.yellow(`${figures.warning} File ${name}.ts already exists!\n`)); // Warning with icon
    process.exit(1);
}

// Default content for the middleware file
const fileContent = ` 
import type {MiddlewareContext} from '@/router';
/**
* Middleware for ${name}
* @param {MiddlewareContext} context
*/
export default async function ${name}({to, from, next, router, params}: MiddlewareContext) {
  // Your middleware code here
  await next();
};
`;

// Create the middleware directory if it doesn’t exist
const spinner = ora(`Creating middleware ${name}.ts...\n`).start(); // Start the spinner


try {
    fs.mkdirSync(targetDirectory, {recursive: true}); // Ensure the target directory exists

    setTimeout(() => {
        // Write the new file with the default template
        fs.writeFileSync(filePath, fileContent, 'utf8');
        // Prepare import statement and registration for the new middleware
        const importStatement = `import ${name} from '@/router/middleware/${name}';\n`;
        const newRegistration = `${name},\n`;

        // Read the existing middleware registry file
        if (fs.existsSync(registryFilePath)) {
            let currentContent = fs.readFileSync(registryFilePath, 'utf8');

            // Check if the middleware is already registered
            if (currentContent.includes(`${name},`)) {
                console.error(chalk.yellow(`${figures.warning} Middleware ${name} is already registered in the middleware registry!\n`));
            } else {
                // Add import statement if it doesn't already exist
                if (!currentContent.includes(`import ${name} from`)) {
                    currentContent = importStatement + currentContent; // Prepend import statement
                }

                // Append new middleware registration before the closing brace
                currentContent = currentContent.replace(/(\s*}\s*;)/, `\n${newRegistration}$1`); // Insert before the closing brace
                fs.writeFileSync(registryFilePath, currentContent, 'utf8');
                console.log(chalk.green(`${figures.tick} Middleware ${name} registered in middlewareRegistry.ts\n`)); // Success message
            }
        } else {
            // If the file does not exist, create it with import and registration
            const newRegistryContent = `${importStatement}\n  // Add other middleware functions here\n const middlewareRegistry: { [key: string]: Function } = {\n${newRegistration}};\n\nexport default middlewareRegistry;`;
            fs.writeFileSync(registryFilePath, newRegistryContent, 'utf8');
            console.log(chalk.green(`${figures.tick} Middleware registry created with ${name}.\n`)); // New registry created message
        }

        spinner.succeed(chalk.green(`Middleware ${name}.ts created at src/router/middleware\n`)); // Success message with icon

    }, 2000);
} catch (error) {
    spinner.fail(chalk.red(`${figures.cross} Failed to create middleware\n`)); // Failure message with icon
    console.error(chalk.red(error.message) + '\n'); // Log the error message
    process.exit(1);
}
