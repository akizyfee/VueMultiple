<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    className: {
        type: String,
    },
    FillColor: {
        type: String,
        default: "current",
    },
    StrokeColor: {
        type: String,
        default: "current",
    },
});
const svgName = computed(() => {
    if (props.name.includes("/")) {
        return `#${props.name}`;
    } else {
        return `#/${props.name}`;
    }
});
const svgClass = computed(() =>
    props.className ? "svg-icon " + props.className : "svg-icon"
);
</script>

<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="svgName" :fill="FillColor" :stroke="StrokeColor" />
    </svg>
</template>
  
  <style>
.svg-icon {
    fill: currentColor;
    stroke: currentColor;
    overflow: hidden;
}
</style>
  
  