<template>

    <div class="tab-bar-item" @click="itemClick">
      <div  v-if="!isActive" ><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>

      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props : {
    path: String,
    activeColor: {
      type: String,
      default: 'blue'
    }
  },
  data()  {
    return {
      //isActive: false
    }
  },
  computed: {
    isActive (){
      //  /home -> item1(/home) = true
      //  /home -> item1(/category) = false
      //  /home -> item1(/cart) = false
      //  /home -> item1(/profile) = false
      // 返回的路径与计算属性进行对比
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>

.tab-bar-item{
  flex: 1;
  text-align: center;
  /*建议49*/
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
