<template>
    <div class="header-box">
        <div class="search-box">
            <a href="#" class="search">
                <span class="search-icon">
                    <svg t="1551017404575" fill='rgb(153, 153, 153)' class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3170" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><path d="M1006.144 969.984l-154.304-154.304c78.08-86.72 126.208-201.088 126.208-326.656C978.048 219.392 758.656 0 489.024 0S0 219.392 0 489.024s219.392 489.024 489.024 489.024c116.544 0 223.68-41.152 307.712-109.44L952.192 1024 1006.144 969.984zM76.352 488.96c0-227.584 185.152-412.672 412.672-412.672s412.672 185.088 412.672 412.672-185.088 412.672-412.672 412.672S76.352 716.608 76.352 488.96z" p-id="3171"></path></svg>
                </span>
                <span class="search-img">
                    <img src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt="">
                </span>
                <span class="search-text">搜索</span>
            </a>
            <a href="#" class="search-list">
                <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt="">
            </a>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    @import '~styles/_border.styl'
    .header-box
        width 7.22rem
        height 0.88rem 
        padding-left 0.28rem
        background-color #fff
        overflow hidden
        border 0 0 1px 0,#ebebeb
        .search-box
            width 100%
            height 100%
            display flex
            justify-content space-between
            align-items: center;
            .search
                width 6.34rem
                height 0.56rem
                color rgb(153, 153, 153)
                display flex
                background-color: #f2f2f2;
                border-radius 10px
                font-size 0.24rem
                align-items: center;
                .search-icon
                    width 0.3rem
                    height 0.3rem
                    margin 0 0.1rem
                    color #999
                    svg
                        width 0.3rem
                        height 0.3rem
                .search-img
                    width 0.42rem
                    height 0.3rem
                    margin 0 0.1rem
                    img 
                        display block
                        height 100%
            .search-list
                width 0.88rem
                height 0.88rem
                img 
                    display block
                    height 100%
</style>
