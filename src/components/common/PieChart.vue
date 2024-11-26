<template>
  <div class="summary-container">
    <div class="summary-content">
      <i class="fa-solid fa-chart-pie mr-2"></i>
      <span class="summary-title">Summary</span>
    </div>
    <div class="chart-container">
      <canvas id="myPieChart"></canvas>
    </div>
  </div>

</template>

<script>
import {Chart} from 'chart.js/auto';

export default {
  name: 'CryptoPieChart',
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('myPieChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Bitcoin', 'Cash'],
          datasets: [
            {
              label: 'Crypto Distribution',
              data: [70, 30],
              backgroundColor: ['#00e676', '#6200ea'], // Neon green and purple for crypto style
              borderColor: '#1e1e2e',
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#f0f0f0',
                font: {
                  size: 14,
                },
              },
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
#myPieChart {
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 400px;
  margin: 0 auto;
}

.summary-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background-color: #1e1e2e;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 6px;
}

.summary-content {
  flex: 1;
}

.chart-container {
  flex: 2;
  display: flex;
  justify-content: center;
}
</style>
