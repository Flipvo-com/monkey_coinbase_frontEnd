<template>
  <div class="summary-container">
    <div class="summary-content">
      <i class="fa-solid fa-chart-pie mr-2"></i>
      <span class="summary-title">Summary</span>
      <div class="total-value">Total: {{ toCurrency(totalValue) }}</div>
      <div class="individual-values">
        <div>Bitcoin: {{ bitcoinValue }}</div>
        <div>Cash: {{ cashValue }}</div>
        <div>USDC: {{ usdcValue }}</div>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="myPieChart"></canvas>
    </div>
  </div>
</template>

<script>
import {Chart} from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {toCurrency} from "@/stats/Utils";

export default {
  name: 'CryptoPieChart',
  props: {
    totalValue: {
      type: Number,
      required: true,
    },
    bitcoinValue: {
      type: String,
      required: true,
    },
    cashValue: {
      type: String,
      required: true,
    },
    usdcValue: {
      type: String,
      required: true,
    },
    chartData: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    toCurrency,
    renderChart() {
      // Registering the datalabels plugin
      Chart.register(ChartDataLabels);

      const ctx = document.getElementById('myPieChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Bitcoin', 'Cash', 'USDC'],
          datasets: [
            {
              label: 'Crypto Distribution',
              // data: this.chartData,
              // todo - fix this
              data: [70, 30],

              backgroundColor: ['#002fff', '#0b9f07', '#ffa500'], // Dark neon blue for Bitcoin, green for Cash, and orange for USDC
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
                  size: 12,
                },
              },
            },
            tooltip: {
              enabled: true, // Enable tooltips to show additional information on hover
            },
            datalabels: {
              color: '#f0f0f0',
              formatter: (value) => `${value}%`, // Display percentages on the pie chart
              font: {
                size: 14,
              },
            },
          },
          events: [], // Disable all interactivity, including click events
        },
      });
    },
  },
};
</script>

<style scoped>
#myPieChart {
  width: 100%;
  height: auto;
  max-width: 200px;
  max-height: 200px;
  margin: 0 auto;
}

.summary-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e2e;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 6px;
  margin-bottom: 0.5rem;
}

.summary-content {
  flex: 1; /* Allow the summary to take the remaining space */
  padding-right: 20px; /* Add some space between the summary and the chart */
}

.chart-container {
  flex: 0 0 auto; /* Prevent the chart from expanding and keep it fixed */
  display: flex;
  justify-content: flex-end; /* Align the chart to the far right */
}

.total-value {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}

.individual-values {
  margin-top: 4px;
  font-size: 14px;
  color: #b0b0b0;
}

.individual-values div {
  margin-top: 2px;
}
</style>
