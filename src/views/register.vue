<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-name" label="用户名:" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="form.name"
          required
          placeholder="Enter name"
          type="text"
        ></b-form-input>
        <b-alert show variant="light">字母开头，用户名长度为6-11字节，允许字母数字下划线</b-alert>
      </b-form-group>
      <b-form-group id="input-group-password" label="登录密码:" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="form.password"
          required
          placeholder="请输入密码"
          type="password"
        ></b-form-input>
        <b-alert show variant="light">必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-12字节</b-alert>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="button" variant="info" to="findPass">忘记密码</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      show: true,
      jump: true,
      msg_name: ""
    };
  },
  methods: {
    onSubmit(evt) {
      var regex_name = /^[a-zA-Z][a-zA-Z0-9_]{5,11}$/;
      evt.preventDefault();
      if (!regex_name.test(this.form.name)) {
        this.msg_name = "用户名或密码错误\n";
        this.jump = false;
      } else {
        this.jump = true;
      }
      if (this.jump) {
        axios
          .post("http://127.0.0.1:8000/v1/tokens", {
            username: this.form.name,
            password: this.form.password
          })
          .then(function(response) {
            if (response.data.code == 200) {
              localStorage.setItem("dashopt_bv_user", response.data.username);
              localStorage.setItem(
                "dashopt_bv_token",
                response.data.data.token
              );
              localStorage.setItem(
                "dashopt_bv_count",
                response.data.carts_count
              );
            }
          });
        alert("登陆成功,跳转到首页");
        this.$router.push("/index");
      } else {
        alert(this.msg_name);
      }
    }
  }
};
</script>

