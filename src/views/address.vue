<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-name" label="收货人:" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="form.name"
          required
          placeholder="Enter name"
          type="text"
        ></b-form-input>
      </b-form-group>
      <div>
        <b-form-select v-model="selected1" :options="options1"></b-form-select>
        <b-form-select v-model="selected2" :options="options2_()"></b-form-select>
        <b-form-select v-model="selected3" :options="options3_()"></b-form-select>
      </div>
      <b-form-group id="input-group-password1" label="详情地址:" label-for="input-text">
        <b-form-input id="input-text" v-model="form.text" required placeholder="请输入地址" type="text"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-postcode" label="邮政编码:" label-for="input-1">
        <b-form-input
          id="input-postcode"
          v-model="form.Postcode"
          type="text"
          required
          placeholder="Enter Postcode"
        ></b-form-input>
        <b-alert show variant="light">例如:123123@qq.com</b-alert>
      </b-form-group>
      <b-form-group id="input-group-phone" label="手机号:" label-for="input-2">
        <b-form-input id="input-phone" v-model="form.phone" required placeholder="请输入手机号"></b-form-input>
        <b-alert show variant="light">例如:13331333963</b-alert>
      </b-form-group>
      <b-form-group id="input-group-address-name" label="地址名称:" label-for="input-address-name">
        <b-form-input
          id="input-address-name"
          v-model="form.address_name"
          required
          placeholder="如:家,公司,学校"
          type="text"
        ></b-form-input>
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
        Postcode: "",
        name: "",
        text: "",
        phone: "",
        address_name: ""
      },
      mag_postcode: "邮箱正确\n",
      msg_phone: "手机号正确",
      show: true,
      jump: true,

      selected1: "选择省",
      selected2: null,
      selected3: null,
      options1: [
        { value: "选择省", text: "选择省", data_code: "" },
        { value: "北京市", data_code: "110000", text: "北京市" },
        { value: "天津市", data_code: "120000", text: "天津市" }
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      var regex_postcode = /^[1-9][0-9]{5}$/;
      var regex_phone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      if (!regex_postcode.test(this.form.Postcode)) {
        this.mag_postcode = "邮政编码错误\n";
        this.jump = false;
      }
      if (!regex_phone.test(this.form.phone)) {
        this.msg_phone = "手机号错误";
        this.jump = false;
      }
      if (!this.jump) {
        alert(this.mag_postcode + this.msg_phone);
      } else {
        // axios.interceptors.response.use(config => {
        //   config.headers.Authorization = localStorage.getItem(
        //     "dashopt_bv_token"
        //   );
        // });
        axios
          .post(
            "http://127.0.0.1:8000/v1/users/" +
              localStorage.getItem("dashopt_bv_user") +
              "/address",
            {
              receiver: this.form.name,
              receiver_phone: this.form.phone,
              address: this.form.text,
              postcode: this.form.Postcode,
              tag: this.form.address_name
            },
            {
              headers: {
                Authorization: localStorage.getItem("dashopt_bv_token")
              }
            }
          )
          .then(function(response) {
            // if (response.data.code == 200) {
            alert(response);
            // }
          });
        (this.form.Postcode = ""),
          (this.form.name = ""),
          (this.form.phone = "");
        this.text = "";
        this.address_name = "";
      }
    },
    options2_() {
      var options4 = [
        { value: "选择市", text: "选择市", data_code: "" },
        { value: "天津市市辖区", data_code: "120100", text: "天津市市辖区" },
        { value: "天津市郊县", data_code: "120200", text: "天津市郊县" }
      ];
      var options2 = [
        { value: "选择市", text: "选择市", data_code: "" },
        { value: "北京市市辖区", data_code: "110100", text: "北京市市辖区" }
      ];
      var options6 = [{ value: "选择市", text: "选择市", data_code: "" }];
      if (this.selected1 == "选择省") {
        this.selected2 = "选择市";
        return options6;
      } else if (this.selected1 == "北京市") {
        return options2;
      } else if (this.selected1 == "天津市") {
        return options4;
      }
    },
    options3_() {
      var options8 = [{ value: "选择区", text: "选择区", data_code: "" }];
      var options7 = [{ value: "选择区", text: "选择区", data_code: "" }];
      var options3 = [
        { value: "选择区", text: "选择区", data_code: "" },
        { value: "东城区", data_code: "110101", text: "东城区" },
        { value: "西城区", data_code: "110102", text: "西城区" },
        { value: "朝阳区", data_code: "110105", text: "朝阳区" },
        { value: "丰台区", data_code: "110106", text: "丰台区" },
        { value: "石景山区", data_code: "110107", text: "石景山区" },
        { value: "海淀区", data_code: "110108", text: "海淀区" },
        { value: "门头沟区", data_code: "110109", text: "门头沟区" },
        { value: "房山区", data_code: "110111", text: "房山区" },
        { value: "通州区", data_code: "110112", text: "通州区" },
        { value: "顺义区", data_code: "110113", text: "顺义区" },
        { value: "昌平区", data_code: "110114", text: "昌平区" },
        { value: "大兴区", data_code: "110115", text: "大兴区" },
        { value: "怀柔区", data_code: "110116", text: "怀柔区" },
        { value: "平谷区", data_code: "110117", text: "平谷区" },
        { value: "密云区", data_code: "110118", text: "密云区" },
        { value: "延庆区", data_code: "110119", text: "延庆区" }
      ];
      var options5 = [
        { value: "选择区", text: "选择区", data_code: "" },
        { value: "和平区", data_code: "120101", text: "和平区" },
        { value: "河东区", data_code: "120102", text: "河东区" },
        { value: "河西区", data_code: "120103", text: "河西区" },
        { value: "南开区", data_code: "120104", text: "南开区" },
        { value: "河北区", data_code: "120105", text: "河北区" },
        { value: "红桥区", data_code: "120106", text: "红桥区" },
        { value: "东丽区", data_code: "120110", text: "东丽区" },
        { value: "西青区", data_code: "120111", text: "西青区" },
        { value: "津南区", data_code: "120112", text: "津南区" },
        { value: "北辰区", data_code: "120113", text: "北辰区" },
        { value: "武清区", data_code: "120114", text: "武清区" },
        { value: "宝坻区", data_code: "120115", text: "宝坻区" },
        { value: "滨海新区", data_code: "120116", text: "滨海新区" },
        { value: "宁河区", data_code: "120117", text: "宁河区" },
        { value: "静海区", data_code: "120118", text: "静海区" },
        { value: "蓟县", data_code: "120225", text: "蓟县" }
      ];
      if (this.selected1 == "选择省") {
        this.selected3 = "选择区";
        return options7;
      } else if (this.selected2 == "选择市") {
        this.selected3 = "选择区";
        return options7;
      } else if (this.selected2 == "北京市市辖区") {
        this.selected3 = "东城区";
        return options3;
      } else if (this.selected2 == "天津市市辖区") {
        this.selected3 = "和平区";
        return options5;
      } else if (this.selected2 == "天津市郊县") {
        this.selected3 = "选择区";
        return options8;
      }
    }
  }
};
</script>