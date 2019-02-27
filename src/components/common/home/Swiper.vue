<template>
    <div class="swiper-box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://goods8.juancdn.com/jas/190222/f/6/5c6fcdde33b0897a5300854c_1080x418.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://goods2.juancdn.com/jas/190221/3/b/5c6e4bc133b089288e26148a_1080x418.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://goods8.juancdn.com/jas/190218/e/e/5c6a768db6f8ea1418441a46_1080x418.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://goods7.juancdn.com/jas/181018/c/b/5bc8472e33b0896039196e1b_1080x418.jpg" alt="">
                </div>
            </div>
            
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {

    mounted () {
        
        var myswiper = new Swiper('.swiper-container',{
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
        
    }
}
</script>


<style lang="stylus" scoped>
    @import '~styles/swiper.min.css'
    .swiper-box
        width 100%
        height 2.9rem
        img 
            display block
            width 100%
            height 100%
        .swiper-pagination
            .swiper-pagination-bullet
                width 0.16rem
                height 0.16rem
</style>

