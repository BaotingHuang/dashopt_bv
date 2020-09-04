<template>
  <div>
    <b-button-group>
      <b-button variant="outline-primary">全部订单</b-button>
      <b-button variant="outline-primary">待付款</b-button>
      <b-button variant="outline-primary">待发货</b-button>
      <b-button variant="outline-primary">待收货</b-button>
      <b-button variant="outline-primary">已完成</b-button>
      <b-button variant="outline-info" to="/address">收货地址管理</b-button>
      <b-button variant="outline-info" to="/cp">账号安全管理</b-button>
    </b-button-group>
    <router-view />
  </div>
</template>