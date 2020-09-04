<template>
  <div>
    <div v-if="one">
      <h5>邮箱名称:</h5>
      <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
      <b-button variant="outline-primary" @click="fun1">发送验证码</b-button>
    </div>
    <div v-if="twe">
      <h5>验证码:</h5>
      <b-form-input v-model="number" placeholder="Enter your number"></b-form-input>
      <b-button variant="outline-primary" @click="fun2">提交验证码</b-button>
    </div>
    <div v-if="three">
      <b-form-group id="input-group-password" label="登录密码:" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="password"
          required
          placeholder="请输入密码"
          type="password"
        ></b-form-input>
        <b-alert show variant="light">必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-12字节</b-alert>
      </b-form-group>
      <b-button type="submit" variant="primary" @click="fun3">提交密码</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      number: "",
      password: "",
      one: 1,
      twe: "",
      three: "",
      nm: ""
    };
  },
  methods: {
    fun1() {
      var that = this;
      var regex_email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (!regex_email.test(this.email)) {
        alert("邮箱错误");
      } else {
        axios
          .post("http://127.0.0.1:8000/v1/users/findPass", {
            email: this.email
          })
          .then(function(response) {
            that.nm = response.data.number;
            that.one = false;
            that.twe = true;
          });
      }
    },
    fun2() {
      if (this.number == this.nm) {
        this.twe = false;
        this.three = true;
      }
    },
    fun3() {
      var regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,12}$/;
      if (!regex_password.test(this.password)) {
        alert("密码错误");
      } else {
        axios
          .post("http://127.0.0.1:8000/v1/users/update", {
            email: this.email,
            password: this.password
          })
          .then(function(response) {
            if (response.data.code == 200) {
              alert("修改成功,跳转到登录页");
              this.$router.push("/register");
            }
          });
      }
    }
  }
};
</script>