<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { Chart } from "chart.js/auto";

const props = defineProps({
  type: { type: String, default: "bar" }, // "bar" or "line"
  chartId: { type: String, default: "chart" }, // unique ID
  chartData: { type: Object, required: true }, // data
  chartOptions: { type: Object, default: () => ({}) }, // options
});

const chartRef = ref(null);
let chartInstance = null;

onMounted(() => {
  const ctx = chartRef.value.getContext("2d");
  chartInstance = new Chart(ctx, {
    type: props.type,
    data: props.chartData,
    options: props.chartOptions,
  });
});

// Re-render if props change
watch(() => [props.type, props.chartData, props.chartOptions], () => {
  if (chartInstance) chartInstance.destroy();
  const ctx = chartRef.value.getContext("2d");
  chartInstance = new Chart(ctx, {
    type: props.type,
    data: props.chartData,
    options: props.chartOptions,
  });
}, { deep: true });

onBeforeUnmount(() => {
  if (chartInstance) chartInstance.destroy();
});
</script>

<template>
  <canvas :id="chartId" ref="chartRef"></canvas>
</template>
