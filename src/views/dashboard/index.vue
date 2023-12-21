<script setup>
import { onMounted } from "vue";
import { useNotification } from "@/composables/useNotification";

const notifi = useNotification();

onMounted(() => {
    notifi.open({
        type: "success",
        content: "測試測試",
        seconds: 3000,
    });
});
</script>

<template>
    <div>dash</div>
</template>