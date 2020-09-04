<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-uname" label="用户名:" label-for="input-uname">
        <b-form-input
          id="input-uname"
          v-model="form.uname"
          required
          placeholder="Enter uname"
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
      <b-form-group id="input-group-password2" label="再次输入登录密码:" label-for="input-2">
        <b-form-input
          id="input-password2"
          v-model="form.password2"
          required
          placeholder="请输入密码"
          type="password"
        ></b-form-input>
        <b-alert show variant="light">两次密码需一致</b-alert>
      </b-form-group>
      <b-form-group id="input-group-email" label="邮箱:" label-for="input-1">
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
        <b-alert show variant="light">例如:123123@qq.com</b-alert>
      </b-form-group>
      <b-form-group id="input-group-phone" label="手机号:" label-for="input-2">
        <b-form-input id="input-phone" v-model="form.phone" required placeholder="请输入手机号"></b-form-input>
        <b-alert show variant="light">例如:13331333963</b-alert>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <!-- {{ msg }} -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        uname: "",
        password: "",
        password2: "",
        phone: ""
      },
      msg_uname: "用户名正确\n",
      msg_password: "密码正确\n",
      mag_email: "邮箱正确\n",
      msg_phone: "手机号正确",
      show: true,
      jump: true
    };
  },
  methods: {
    onSubmit() {
      var regex_uname = /^[a-zA-Z][a-zA-Z0-9_]{5,11}$/;
      var regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,12}$/;
      var regex_email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      var regex_phone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      //   if (this.form.uname.length < 6 || this.form.uname.length > 11) {
      // this.msg_uname = "用户名长度错误\n";
      //   } else if (!regex_uname.test(this.form.uname)) {
      if (!regex_uname.test(this.form.uname)) {
        this.msg_uname = "用户名错误\n";
        this.jump = false;
      }

      if (this.form.password === this.form.password2) {
        // if (this.form.password.length < 6 || this.form.password > 12) {
        if (!regex_password.test(this.form.password)) {
          this.msg_password = "密码错误\n";
          this.jump = false;
        }
        // }
      } else {
        this.msg_password = "两次密码不一致\n";
        this.jump = false;
      }
      if (!regex_email.test(this.form.email)) {
        this.mag_email = "邮箱错误\n";
        this.jump = false;
      }
      if (!regex_phone.test(this.form.phone)) {
        this.msg_phone = "手机号错误";
        this.jump = false;
      }
      if (!this.jump) {
        alert(
          this.msg_uname + this.msg_password + this.mag_email + this.msg_phone
        );
      } else {
        axios
          .post("http://127.0.0.1:8000/v1/users", {
            uname: this.form.uname,
            password: this.form.password,
            phone: this.form.phone,
            email: this.form.email
          })
          .then(function(response) {
            if (response.data.code == 200) {
              alert("注册成功,跳转到登录页");
            }
          })
          .catch(function(error) {
            console.log(error);
          });
        (this.form.email = ""),
          (this.form.uname = ""),
          (this.form.password = ""),
          (this.form.password2 = ""),
          (this.form.phone = "");
        this.$router.push("/register");
      }
    }
  }
};
</script>

