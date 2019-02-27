<template>
    <div class="goods-box">
        <a :href = "goods.goods_jump_url">
            <div class="goods">
                <div class="goods-img">
                    <img class='goods-image' :src = "goods.pic_url" alt="">
                    <div class="goods-img-right_bot">
                        <img :src = "goods.logo_url" alt="">
                    </div>
                    <!-- <img class="goods-img-left_top" src="https://goods5.juancdn.com/bao/180109/9/2/5a54610f8150a179c360e6fa_90x90.png" alt=""> -->
                </div>
                <div class="goods-discount">
                    <span>{{goods.coupon_tips}}</span>
                </div>
                <div class="goods-text">
                    {{goods.title}}
                    <span class="goods-time">{{goods.time_left}}</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props:{
        'goods':Object
    }
}
</script>


<style lang="stylus" scoped>
    @import '~styles/_border.styl'
    .goods-box
        width 3.71rem
        height 4.85rem
        margin 0.04rem 0.04rem 0 0
        .goods
            width 100%
            height 100%
            background #fff
            .goods-img
                width 100%
                height 3.74rem
                position relative
                img 
                    display block
                    width 100%
                    height 100%
                .goods-img-right_bot
                    width 1rem
                    height 0.5rem
                    background-size cover
                    position absolute
                    bottom -0.25rem
                    right 0.17rem
                    /* border 1px 1px 1px 1px,#ebebeb */
                    background-color: #fff;
                .goods-img-left_top
                    position absolute
                    top 0
                    left 0
                    width 0.9rem
                    height 0.9rem
            .goods-discount
                width 3.41rem
                height 0.44rem
                line-height 0.44rem
                padding 0 0.16rem
                margin-top 0.12rem
                align-items center
                span 
                    display block
                    color #ff464e
                    font-size 0.3rem
                    margin-right 0.08rem
            .goods-text
                width 2.33rem
                height 0.31rem
                padding 0 1.24rem 0 0.16rem
                margin-bottom 0.24rem
                overflow hidden
                position relative
                font-size 0.24rem
                color #3b3b3b
                white-space nowrap
                text-overflow ellipsis
                line-height 0.31rem
                .goods-time
                    position absolute
                    top 50%
                    right 0.16rem
                    color #bbb
                    transform translateY(-50%)
                    font-size 0.2rem
</style>

