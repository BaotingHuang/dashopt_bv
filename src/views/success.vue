<template>
  <div>
    <b-jumbotron bg-variant="light" text-variant="black" border-variant="dark">
      <template v-slot:header>支付成功</template>
      <hr class="my-4" />
      <p @click="check" id="an">查看订单>></p>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: "success",
  data() {
    return {};
  },
  methods: {
    check() {
      this.$router.push("/myOrder");
    }
  }
};
</script>
<style scoped>
#an:hover {
  color: blue;
  cursor: pointer;
}
</style>