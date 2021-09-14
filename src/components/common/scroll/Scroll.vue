<template>
<!--ref//children-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type:Boolean,
      default: false
    }
  },
  data()  {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1.创建scroll对象
    // 一定获取本组件的wrapper
    this.scroll = new BScroll(this.$refs.wrapper, {
      /* 必须设置为true*/
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad

    }),
      // 2.监听滚动位置
   this.scroll.on('scroll', (position) => {
      // console.log(position);
     this.$emit('scroll' , position)
    })

    // 3.监听上拉时间
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },


    methods: {
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x,y, time)
      },

      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
}
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
  }
</style>
