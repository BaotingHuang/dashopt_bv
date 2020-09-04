<template>
  <div>
    <div>
      <b-button block variant="light" disabled>{{ msg }}</b-button>
    </div>
    <b-progress :value="value" :max="max" show-progress animated></b-progress>
    <router-view />
    <b-button
      variant="outline-primary"
      class="mt-3"
      :style="{ display:m1g }"
      @click="randomValue"
    >{{ mag }}</b-button>
    <b-button variant="outline-primary" class="mt-3" :style="{ display:m2g }" @click="fun">{{ m3g }}</b-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "确认订单",
      value: 33,
      max: 100,
      mag: "确定订单",
      m1g: "",
      m2g: "none",
      m3g: "跳转到首页"
    };
  },
  created() {
    this.$router.push("/order");
  },
  methods: {
    randomValue() {
      if (this.value === 33) {
        this.msg = "确认订单";
        this.mag = "确认订单";
      }
      this.value = this.value + this.value;
      if (this.value === 66) {
        this.msg = "支付订单";
        this.mag = "确定支付";
        this.$router.push("/al");
      }
      if (this.value > 100) {
        this.value = 100;
        this.msg = "支付完成";
        this.m1g = "none";
        this.m2g = "";
        this.$router.push("/suc");
      }
    },
    fun() {
      this.$router.push("/index");
    }
  }
};
</script>