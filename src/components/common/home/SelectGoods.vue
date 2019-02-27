<template>
    <div class="select-goods">
        <div class="select-goods-list">
            <Goods
            v-for = 'goods in goodslist'
            :key = 'goods.goods_id'
            :goods = 'goods'
            ></Goods>
        </div>
    </div>
</template>

<script>
import Goods from 'components/common/home/Goods'
export default {
    components: {
        Goods
    },
    props:{
        'specialSelection':Object
    },
    computed:{
        goodslist(){
            return this.specialSelection && this.specialSelection.data.goods || []
        }
    }
}
</script>

<style lang="stylus" scoped>
    .select-goods
        overflow hidden
        .select-goods-list
            display flex
            justify-content space-between
            flex-wrap wrap
</style>

