<template>
  <div class="index">
    <Nav />
    <div class="main">
      <Content />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Nav from "@/components/nav.vue";
import Content from "@/components/content.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "Index",
  components: {
    Nav,
    Content,
    Footer
  },
  created() {
    (this as any).$router.push("/download");
  }
};
</script>

<style lang="scss">
.index {
  display: flex;
  height: 100vh;
  flex-direction: column;
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
  }
}
</style>