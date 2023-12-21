<script setup>
import { notifiData, useNotification } from "@/composables/useNotification.js";
import { computed, onMounted } from "vue";

const notifi = useNotification();
const typeText = ref("Success");

const NClass = computed(() => {
    switch (notifiData.type) {
        case "success":
            typeText.value = "Success";
            return "border-green-500";
        case "warning":
            typeText.value = "Warning";
            return "border-yellow-500";
        case "error":
            typeText.value = "Error";
            return "border-red-500";
        case "info":
            typeText.value = "Info";
            return "border-blue-500";
        default:
            break;
    }
});

const animateTime = computed(() => {
    return notifiData.seconds + "ms";
});
const animatePause = computed(() => {
    return notifiData.isHover ? "paused" : "running";
});

onMounted(() => {
    var e = document.getElementById("notification");
    e.addEventListener("animationend", () => {
        notifi.close();
    });
});

function close() {
    notifi.close();
}
</script>

<template>
    <transition
        enter-active-class="transition ease-out"
        enter-from-class="transform opacity-0 scale-95 -translate-y-10"
        enter-to-class="transform opacity-100 scale-100 translate-y-0"
        leave-active-class="transition ease-in"
        leave-from-class="transform opacity-100 scale-100 translate-y-0"
        leave-to-class="transform opacity-0 scale-95 -translate-y-10"
    >
        <div
            v-show="notifiData.show"
            id="notification"
            :class="NClass"
            class="fixed top-4 left-[50%] -translate-x-[50%] z-[10000] w-full md:w-auto max-w-[300px] md:max-w-[600px] px-4 py-4 rounded flex justify-between items-center gap-4 bg-white shadow-md shadow-gray-400 border-l-4"
        >
            <div class="flex items-center gap-4">
                <SvgIcon
                    v-if="notifiData.type == 'success'"
                    name="icon-check"
                    className="w-6 h-6 text-green-500"
                ></SvgIcon>
                <SvgIcon
                    v-if="notifiData.type == 'warning'"
                    name="icon-warning"
                    className="w-6 h-6 text-yellow-500"
                ></SvgIcon>
                <SvgIcon
                    v-if="notifiData.type == 'error'"
                    name="icon-xmark-circle"
                    className="w-6 h-6 text-red-500"
                ></SvgIcon>
                <SvgIcon
                    v-if="notifiData.type == 'info'"
                    name="icon-info"
                    className="w-6 h-6 text-blue-500"
                ></SvgIcon>

                <div class="flex flex-col justify-start items-start">
                    <!-- <h3 class="text-black font-bold text-lg">{{ typeText }}</h3> -->
                    <div class="w-full lg:max-w-[400px] break-words">
                        {{ notifiData.content }}
                    </div>
                </div>
            </div>

            <button @click="close">
                <SvgIcon
                    name="icon-xmark"
                    className="w-6 h-6 text-gray-500 ml-5 hover:text-gray-600"
                ></SvgIcon>
            </button>

            <div
                v-if="notifiData.type == 'success'"
                class="progressBar h-1 bg-green-500 absolute bottom-0 left-0"
            ></div>
            <div
                v-if="notifiData.type == 'warning'"
                class="progressBar h-1 bg-yellow-500 absolute bottom-0 left-0"
            ></div>
            <div
                v-if="notifiData.type == 'error'"
                class="progressBar h-1 bg-red-500 absolute bottom-0 left-0"
            ></div>
            <div
                v-if="notifiData.type == 'info'"
                class="progressBar h-1 bg-blue-500 absolute bottom-0 left-0"
            ></div>
        </div>
    </transition>
</template>

<style scoped>
.progressBar {
    width: 100%;
    animation-name: progress;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-duration: v-bind(animateTime);
    animation-play-state: v-bind(animatePause);
}

@keyframes progress {
    100% {
        width: 0%;
    }
}
</style>
