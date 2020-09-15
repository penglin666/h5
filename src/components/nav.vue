<template>
  <div class="nav">
    <div class="wrapper">
      <img src="../assets/images/logo.png" />
      <div class="menu">
        <div v-for="(item,index) in menuList" :key="index" @click="changePage(index)" :class="{'active':index==current}">{{item}}</div>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索" />
        <div class="clear">×</div>
        <div class="search-icon">
          <img src="../assets/images/search.png" />
        </div>
      </div>
      <div class="flex user">
        <div class="login">登录</div>
        <div class="reg">注册</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      menuList: ["首页", "图库", "笔记", "下载", "论坛"],
      current: 0 //当前的子页面路由
    };
  },
  methods: {
    changePage(index: number) {
      switch (index) {
        case 0:
          (this as any).$router.push("/home");
          (this as any).current = index;
          break;
        case 1:
          (this as any).$router.push("/pics");
          (this as any).current = index;
          break;
        case 2:
          (this as any).$router.push("/note");
          (this as any).current = index;
          break;
        case 3:
          (this as any).$router.push("/download");
          (this as any).current = index;
          break;
        case 4:
          (this as any).$router.push("talk");
          (this as any).current = index;
          break;
        default:
          (this as any).$router.push("/home");
          (this as any).current = index;
          break;
      }
    }
  }
};
</script>

<style lang="scss">
.nav {
  height: 60px;
  background-color: rgba(245, 245, 235, 0.4);
  div {
    display: flex;
  }
  .wrapper {
    height: 100%;
    align-items: center;
    justify-content: space-between;
    > .menu {
      flex: 1;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      > div {
        flex: 1;
        height: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
      }
      :hover {
        background-color: rgba(13, 13, 14, 0.7);
        color: #fff;
      }
      .active {
        color: #fff;
        background-color: #4990e2;
      }
    }
    > .search {
      width: 250px;
      background-color: #fff;
      border-radius: 26px;
      height: 30px;
      padding: 0 2px;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-between;
      input {
        border-bottom-left-radius: 26px;
        border-top-left-radius: 26px;
        width: 70%;
        height: 100%;
        box-sizing: border-box;
        border: none;
        outline: none;
        padding-left: 13px;
      }
      .clear {
        width: 20px;
        height: 20px;
        background-color: #ccc;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 50%;
        margin-right: 2px;
      }
      .search-icon {
        width: 20%;
        height: 80%;
        background-color: #eee;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .user {
      justify-content: flex-end;
      margin-left: 20px;
    }
  }
}
</style>