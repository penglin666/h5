<template>
  <div>
    <Waterfall
      ref="waterfall"
      :list="lotList"
      :gutter="13"
      backgroundColor="#ffffff"
      :breakpoints="{500: { rowPerView: 2,}}"
    >
      <template slot="item" slot-scope="props">
        <div class="water" :class="block?'showWater':''">
          <img :src="props.data.mediumUrl" alt @load="$refs.waterfall.refresh()" style="width:100%" />
          <div class="d-flex flex-wrap">
            <div style="color:#000000;font-size:0.28rem;padding:0 0.2rem">
              <span
                class="com-color"
                style="margin-right:0.2rem;display:inline-block"
              >Lot {{props.data.lotNum}}</span>
              <span style="margin-right:0.13rem">{{props.data.lotAuthor}}</span>
              <span>{{props.data.createYear}}</span>
              <span>{{props.data.lotName}}</span>
            </div>
          </div>
          <div class="com-color" style="padding-left:0.2rem;margin-top:0.1rem">
            <span>估价</span>
            &yen {{props.data.assessValue|currency}} - {{props.data.assessEndValue|currency}}
          </div>
        </div>
      </template>
    </Waterfall>
  </div>
</template>
<script>
import Waterfall from "vue-waterfall-plugin";
export default {
  components: {
    Waterfall: Waterfall
  },
  data() {
    return {
      param: {
        specId: 75,
        orderColumn: 1,
        direction: "asc", //asc升序 desc降序
        size: 10,
        current: 1,
        lotName: null
      },
      lotList: []
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.com-color {
  color: #a57a44;
}
.water {
  display: none;
  text-align: left;
  color: #000000;
  padding-bottom: 0.15rem;
  box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  -moz-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  filter: progid:DXImageTransform.Microsoft.Shadow(color = #adacac, direction = 135, strength = 2);
  .top {
    margin: 0.1rem 0;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
  }
  &.showWater {
    display: block;
  }
}
</style>