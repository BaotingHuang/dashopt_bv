<template>
  <div>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="msg.data.base_url+msg.data.data.image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <h1>{{ msg.data.data.name }}</h1>
              <h3>{{ msg.data.data.caption }}</h3>
              <h3>售价:{{ msg.data.data.price }}</h3>
              <p>服务承诺： *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货</p>
              <span>客服： 联系客服</span>
              <h2>
                {{ msg.data.data.sku_sale_attr_names[0] }}:
                <b-button :variant="primary_1" :disabled="check1" @click="an1">15寸</b-button>
                <b-button :variant="primary_2" :disabled="check2" @click="an2">18寸</b-button>
              </h2>
              <h2>
                {{ msg.data.data.sku_sale_attr_names[1] }}:
                <b-button :variant="primary_3" :disabled="check3" @click="an3">蓝色</b-button>
                <b-button :variant="primary_4" :disabled="check4" @click="an4">灰色</b-button>
              </h2>
              <h3>
                数量:
                <b-button squared variant="info" @click="reduce" :disabled=" check ">-</b-button>
                {{ number }}
                <b-button squared variant="info" @click="add" :disabled=" checks ">+</b-button>
              </h3>
              <b-button squared variant="info" :disabled="check5">立即购买</b-button>
              <b-button squared variant="primary" @click="add_s" :disabled="check6">加入购物车</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "详情页3",
  data() {
    return {
      number: 1,
      msg: null,
      check: false,
      checks: false,
      primary_1: "outline-primary",
      primary_2: "outline-primary",
      primary_3: "outline-primary",
      primary_4: "outline-primary",
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      dataAll: []
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/v1/goods/detail/3")
      .then(response =>
        (this.msg = response).catch(error => console.log(error))
      );
  },
  methods: {
    reduce() {
      this.number--;
      if (this.number === 0) {
        this.check = true;
      }
    },
    add() {
      this.number++;
      if (this.number > 0) {
        this.check = false;
      }
    },
    an1() {
      this.primary_1 = "primary";
      this.primary_2 = "outline-primary";
    },
    an2() {
      this.primary_2 = "primary";
      this.primary_1 = "outline-primary";
    },
    an3() {
      this.primary_3 = "primary";
      this.primary_4 = "outline-primary";
    },
    an4() {
      this.primary_4 = "primary";
      this.primary_3 = "outline-primary";
    },
    add_s() {
      var ls = [
        {
          name: this.msg.data.data.name,
          price: this.msg.data.data.price,
          number: 0,
          img: this.msg.data.data.image,
          cc: "18寸",
          color: "灰色",
          id: "详情页3_18寸灰色",
          check: false,
          count: 0,
          index: 0,
          pay: 0
        },
        {
          name: this.msg.data.data.name,
          price: this.msg.data.data.price,
          number: 0,
          img: this.msg.data.data.image,
          cc: "18寸",
          color: "蓝色",
          id: "详情页3_18寸蓝色",
          check: false,
          count: 0,
          index: 1,
          pay: 0
        },
        {
          name: this.msg.data.data.name,
          price: this.msg.data.data.price,
          number: 0,
          img: this.msg.data.data.image,
          cc: "15寸",
          color: "灰色",
          id: "详情页3_15寸灰色",
          check: false,
          count: 0,
          index: 2,
          pay: 0
        },
        {
          name: this.msg.data.data.name,
          price: this.msg.data.data.price,
          number: 0,
          img: this.msg.data.data.image,
          cc: "15寸",
          color: "蓝色",
          id: "详情页_15寸蓝色",
          check: false,
          count: 0,
          index: 3,
          pay: 0
        }
      ];
      if (localStorage.getItem(this.msg.data.data.name)) {
        this.dataAll = JSON.parse(
          localStorage.getItem(this.msg.data.data.name)
        );
      } else {
        localStorage.setItem(this.msg.data.data.name, JSON.stringify(ls));
      }
      if (localStorage.getItem(this.msg.data.data.name)) {
        this.dataAll = JSON.parse(
          localStorage.getItem(this.msg.data.data.name)
        );
      } else {
        localStorage.setItem(this.msg.data.data.name, JSON.stringify(ls));
      }
      if (this.primary_1 == "primary" && this.primary_3 == "primary") {
        this.dataAll[3].number += this.number;
      }
      if (this.primary_1 == "primary" && this.primary_4 == "primary") {
        this.dataAll[2].number += this.number;
      }
      if (this.primary_2 == "primary" && this.primary_3 == "primary") {
        this.dataAll[1].number += this.number;
      }
      if (this.primary_2 == "primary" && this.primary_4 == "primary") {
        this.dataAll[0].number += this.number;
      }
      localStorage.setItem(
        this.msg.data.data.name,
        JSON.stringify(this.dataAll)
      );
    }
  },
  computed: {
    check6: function() {
      if (
        (this.primary_1 == "outline-primary" &&
          this.primary_2 == "outline-primary") ||
        (this.primary_3 == "outline-primary" &&
          this.primary_4 == "outline-primary") ||
        this.number == 0
      ) {
        return true;
      }
    },
    check5: function() {
      if (
        (this.primary_1 == "outline-primary" &&
          this.primary_2 == "outline-primary") ||
        (this.primary_3 == "outline-primary" &&
          this.primary_4 == "outline-primary") ||
        this.number == 0
      ) {
        return true;
      }
    }
  }
};
</script>