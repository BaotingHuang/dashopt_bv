<!--<template>
  <div>
    <b-card-group deck>
      <b-card header="订单金额:" header-tag="header" title="支付宝支付">
        <b-form-radio-group
          class="pt-2"
          style="display:inline"
          value-field="true"
          unchecked-value="false"
          v-model="ss"
        ></b-form-radio-group>
        <b-img :src=" require('../../public/timg .jpg')" height="75" width="150"></b-img>
        {{ ss }}
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
export default {
  name: "alpay",
  data() {
    return {
      ss: "true"
    };
  }
};
</script>-->
<template>
  <div>
    <b-card header="订单金额:" header-tag="header" title="支付宝支付">
      <b-form-group label>
        <b-form-radio v-model="selected" name="some-radios" value="A" style="display:inline">
          <b-img :src=" require('../../public/timg .jpg')" height="75" width="150"></b-img>
        </b-form-radio>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "A"
    };
  }
};
</script>