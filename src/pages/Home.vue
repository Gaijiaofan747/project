<template>
    <div class="home">
        <div class="home-box">
            <div class='home-box-box'>
                <Swiper></Swiper>
                <div class="activity">
                    <ul class="activity-list">
                        <li><img src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png" alt=""></li>
                        <li><img src="https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png" alt=""></li>
                        <li><img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png" alt=""></li>
                        <li><img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png" alt=""></li>
                    </ul>
                    <div class="activity-box">
                        <div class="activity-box-left">
                            <img src="https://s2.juancdn.com/jas/181019/d/7/5bc9a9c033b08925fc7dc876_540x656.gif" alt="">
                        </div>
                        <div class="activity-box-right">
                            <div class="activity-box-right-top">
                                <img src="https://goods8.juancdn.com/jas/190222/f/0/5c6fbb03b6f8ea7d9c237a98_540x328.png?imageMogr2/quality/85!/format/png" alt="">
                            </div>
                            <div class="activity-box-right-bottom">
                                <img src="https://goods7.juancdn.com/jas/190220/d/b/5c6d21f4b6f8ea1aff1bb94c_540x328.png?iopcmd=convert&Q=85&dst=png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="good">
                    <img src="https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png" alt="">
                </div>
                <div class="good2">
                    <img src="https://s2.juancdn.com/jas/190222/b/6/5c6fa64733b08973ce6b1773_1080x330.gif" alt="">
                </div>
                <div class="select">
                    <ul class="select-list">
                        <li class='goods-color'>
                            <div>精选专场</div>
                        </li>
                        <li>
                            <div>精选单品</div>
                        </li>
                    </ul>
                    <SelectGoods
                    :special-selection = 'specialSelection'
                    ></SelectGoods>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import Swiper from 'components/common/home/Swiper'
import SelectGoods from 'components/common/home/SelectGoods'
import BScroll from 'better-scroll'
import http from 'utils/http'
export default {
    data(){
        return {
            specialSelection:null
        }
    },
    components: {
        Swiper,SelectGoods
    },
    async created(){
        this.specialSelection = await http({
            method:'get',
            url:'/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc'
        })
    },
    mounted () {
        this.scroll = new BScroll('.home-box',{
            pullUpLoad:{
                threshold:50
            }
        })
        this.scroll.on('pullingUp',() => {
            this.scroll.finishPullUp()
        })
    }
}
</script>

<style lang="stylus" scoped>
    .home
        width 100%
        height 100%
        overflow hidden
        .home-box
            width 100%
            height 100%
            position static
            img 
                width 100%
                height 100%
            .activity
                background #fff
                overflow hidden
                .activity-list
                    width 100%
                    height 1.67rem
                    display flex
                    li
                        flex 1
                .activity-box
                    width 100%
                    height 4.555rem
                    display flex
                    .activity-box-left
                        flex 1
                        height 100%
                    .activity-box-right
                        flex 1
                        height 100%
                        display flex
                        flex-direction column
            .good
                width 100%
                height 0.96rem
                margin-top 0.2rem
            .good2
                width 100%
                height 2.29rem
            .select
                width 100%
                margin-top 0.2rem
                .select-list
                    background #ffffff
                    width 100%
                    height 0.88rem
                    white-space nowrap
                    overflow-x auto
                    li
                        display inline-block
                        height 0.88rem
                        line-height 0.88rem
                        text-align center
                        color #333
                        padding 0 0.2rem
                        word-wrap break-word
                        font-size 0.32rem
                        div 
                            height 100%
                            box-sizing border-box
                        &.goods-color div
                            color #ff464e
                            border-bottom 4px solid #ff464e
                    
</style>


