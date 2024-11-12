import auth from "@/router/middleware/auth";
import guest from '@/router/middleware/guest';

// Add other middleware functions here
const middlewareRegistry: { [key: string]: Function } = {
    auth,
    guest,
};

export default middlewareRegistry;
