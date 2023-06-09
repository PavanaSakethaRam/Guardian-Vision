/* eslint no-unused-vars: "off" */
export default function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const {
        params,
        animating,
        enabled
    } = swiper;
    if (!enabled) return swiper;
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}