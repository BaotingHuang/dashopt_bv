<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/index">
          <b-img :src=" require('../public/logo.png')" height="50" width="93"></b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-navbar-nav>
              <b-nav-item to="/carts">
                <svg
                  width="1rem"
                  height="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                  name="zi_shoppingcart"
                  viewBox="0 0 2000 2000"
                >
                  <path
                    fill="#2f37d9"
                    d="M2112 1212l188-832q12-44-16-80t-76-36H636L600 84q-8-32-34-54T508 8H96Q56 8 28 36T0 104v64q0 40 28 68t68 28h280l280 1372q-52 32-82 84t-30 112q0 92 66 158t158 66q92 0 158-66t66-160q0-94-68-158h840q-68 64-68 158t66 160q66 66 158 66t158-66q66-66 66-158 0-64-34-118t-94-82l24-100q8-44-20-80t-72-36H872l-24-128h1172q32 0 58-20t34-56zM778 1925q-42 0-72-29.5t-30-71.5q0-43 30-72.5t72-29.5q42 0 72 29.5t30 72.5q0 42-30 71.5t-72 29.5zm1152 0q-42 0-72-29.5t-30-71.5q0-43 30-72.5t72-29.5q42 0 72 29.5t30 72.5q0 42-30 71.5t-72 29.5z"
                  />
                </svg>
                我的购物车
              </b-nav-item>
              <b-nav-item to="/myOrder">我的订单</b-nav-item>
            </b-navbar-nav>
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em @click="fun1()">用户</em>
              </template>
              <b-dropdown-item v-if="token">{{ name }}</b-dropdown-item>
              <b-dropdown-item to="/login" v-if="!token">注册</b-dropdown-item>
              <b-dropdown-item to="/register" v-if="!token">登录</b-dropdown-item>
              <b-dropdown-item to="/" @click="out()">退出</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <div>
      <b-nav tabs align="center">
        <b-item active>©2020 xxx集团有限公司 版权所有 京ICP证xxxxxxxxxxx</b-item>
      </b-nav>
    </div>
    <!-- // -->
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "App",
  store,
  data() {
    return {
      name: "",
      token: ""
    };
  },
  methods: {
    out() {
      localStorage.removeItem("dashopt_bv_user");
      localStorage.removeItem("dashopt_bv_token");
      this.token = false;
    },
    fun1() {
      store.commit("check");
      this.token = store.state.token;
      this.name = store.state.username;
    }
  }
};
</script>
<style scoped>
#buttom {
  margin-block-end: 0;
}
</style>