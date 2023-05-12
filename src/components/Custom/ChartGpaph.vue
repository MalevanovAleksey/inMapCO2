<template>
  <div>
    <canvas ref="chart" width="200px" height="200px"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const canvas = this.$refs.chart;
      const ctx = canvas.getContext("2d");

      const data = {
        labels: [], // добавляем пустые метки оси X
        datasets: [
          {
            label: "CO2 concentration",
            data: [], // добавляем пустые данные
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "CO2 Concentration over Time",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Time (hours)",
            },
          },
          y: {
            title: {
              display: true,
              text: "CO2 Concentration (ppm)",
            },
            suggestedMin: 0, // минимальное значение оси Y
            suggestedMax: 1000, // максимальное значение оси Y
          },
        },
      };

      const chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
      });

      // заполняем данные
      for (let t = 0; t <= 24; t += 0.5) {
        const c =
          (10 / (5 * 10)) * (101325 / 0.21) * (1 - Math.exp(-0.21 * t)) + 500;
        chart.data.labels.push(t.toFixed(1)); // добавляем метку для времени
        chart.data.datasets[0].data.push(c.toFixed(2)); // добавляем данные для концентрации
      }

      chart.update(); // обновляем график
    },
  },
};
</script>
