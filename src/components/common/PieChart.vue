
<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">
        Pie Chart
      </v-card-title>
      <v-card-text>
        <canvas id="myPieChart"></canvas>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { Chart } from 'chart.js/auto';

export default {
  name: 'PieChart',
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('myPieChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [300, 50, 100],
              backgroundColor: ['#f44336', '#2196f3', '#ffeb3b'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
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
  height: 100%;

  /* Add some space around the chart */
  margin: 20px 0;

}

.headline {
  text-align: center;
  font-size: .8rem;
}

.v-card {
  margin-top: 20px;
}
</style>