<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-name" label="旧密码:" label-for="input-name">
        <b-form-input
          id="input-old_password"
          v-model="form.old_password"
          required
          placeholder="Enter old_password"
          type="password"
        ></b-form-input>
        <b-alert show variant="light">必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-12字节</b-alert>
      </b-form-group>
      <b-form-group id="input-group-password1" label="输入新密码:" label-for="input-password1">
        <b-form-input
          id="input-password1"
          v-model="form.password1"
          required
          placeholder="请输入新密码"
          type="password"
        ></b-form-input>
        <b-alert show variant="light">必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-12字节</b-alert>
      </b-form-group>
      <b-form-group id="input-group-password2" label="再次输入新密码:" label-for="input-2">
        <b-form-input
          id="input-password2"
          v-model="form.password2"
          required
          placeholder="请输入新密码"
          type="password"
        ></b-form-input>
        <b-alert show variant="light">两次密码需一致</b-alert>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      form: {
        old_password: "",
        password1: "",
        password2: ""
      },
      msg_old_password: "旧密码正确\n",
      msg_password: "密码正确\n",
      show: true,
      jump: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      var regex_old_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,12}$/;
      var regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,12}$/;
      if (!regex_old_password.test(this.form.old_password)) {
        this.msg_old_password = "旧密码错误\n";
        this.jump = false;
      }

      if (this.form.password1 === this.form.password2) {
        if (!regex_password.test(this.form.password1)) {
          this.msg_password = "密码错误\n";
          this.jump = false;
        }
      } else {
        this.msg_password = "两次密码不一致\n";
        this.jump = false;
      }
      if (!this.jump) {
        alert(this.msg_old_password + this.msg_password);
      } else {
        axios
          .post("http://127.0.0.1:8000/v1/users/modify", {
            old_password: this.form.old_password,
            new_password: this.form.password1,
            username: localStorage.getItem("dashopt_bv_user")
          })
          .then(function(response) {
            if (response.data.code == 200) {
              localStorage.removeItem("dashopt_bv_user");
              localStorage.removeItem("dashopt_bv_token");
              alert("修改成功,跳转到登录页");
              (this.form.old_password = ""),
                (this.form.password1 = ""),
                (this.form.password2 = ""),
                this.$router.push("/register");
            } else {
              alert("ERROR");
            }
          });
      }
    }
  }
};
</script>

