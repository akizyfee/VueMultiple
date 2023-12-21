export const notifiData = reactive({
    show: false,
    isHover: false,
    type: 'info',
    content: "",
    seconds: 5000,
});
export const useNotification = () => {
    const open = (option) => {
        if (option) {
            notifiData.content = option.content || 'Text';
            notifiData.type = option.type || 'info';
            notifiData.seconds = option.seconds || 5000;

        }
        notifiData.show = true;
    }
    const onHover = () => {
        notifiData.isHover = true;
    }
    const onLeave = () => {
        notifiData.isHover = false;
    }
    const close = () => {
        notifiData.show = false;
        notifiData.isHover = false;

    }

    return { open, close, onHover, onLeave }
}