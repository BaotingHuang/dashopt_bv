<template>
  <div>
    <div>
      <b-nav fill>
        <b-nav-item disabled>购物车</b-nav-item>
        <b-nav-item disabled v-bind="count()">已选{{ d1cl+d2cl+d3cl }}件商品</b-nav-item>
        <b-nav-item disabled v-bind="pay()">合计(不含运费)¥{{ d1pl+d2pl+d3pl }}元</b-nav-item>
        <b-nav-item :disabled="tz()" @click="fun2()">去结算</b-nav-item>
      </b-nav>
    </div>
    <div>
      <b-table-simple hover small caption-top responsive>
        <b-thead head-variant="light">
          <b-tr>
            <b-th>
              <div>
                <!--<b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  v-model="all"
                  v-bind="all_()"
                >全选</b-form-checkbox>-->
              </div>
            </b-th>
            <b-th>商品</b-th>
            <b-th>单价(元)</b-th>
            <b-th>数量</b-th>
            <b-th>金额</b-th>
            <b-th>操作</b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="item in data_1" :key="item">
          <b-tr>
            <b-td rowspan="3" v-if="item.number">
              <div>
                <b-form-checkbox
                  :id="item.id"
                  :name="item.id"
                  :value="item.id"
                  unchecked-value="false"
                  v-model="item.check"
                  v-bind="re1(item.id,item.check,item.number,item.index,item.price)"
                >
                  <b-img
                    :src="'http://127.0.0.1:8000/media/'+item.img"
                    width="70"
                    height="60"
                    alt="Responsive image"
                  ></b-img>
                </b-form-checkbox>
              </div>
            </b-td>
            <b-th rowspan="3" v-if="item.number">
              <span>尺寸:{{ item.cc }}</span>
              <br />
              <span>颜色:{{ item.color }}</span>
            </b-th>
            <b-td rowspan="3" v-if="item.number">¥{{item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number">
              <b-button
                squared
                variant="info"
                @click="reduce1(item.cc,item.color)"
                :disabled=" monitor1(item.number) "
              >-</b-button>
              {{ item.number }}
              <b-button squared variant="info" @click="add1(item.cc,item.color)">+</b-button>
            </b-td>
            <b-td rowspan="3" v-if="item.number">¥{{ item.number*item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number">
              <b-button variant="outline-dark" @click="del1(item.index)">删除</b-button>
            </b-td>
          </b-tr>
        </b-tbody>
        <b-tbody v-for="item in data_2" :key="item">
          <b-tr>
            <b-td rowspan="3" v-if="item.number">
              <div>
                <b-form-checkbox
                  :id="item.id"
                  :name="item.id"
                  :value="item.id"
                  unchecked-value="false"
                  v-model="item.check"
                  v-bind="re2(item.id,item.check,item.number,item.index,item.price)"
                >
                  <b-img
                    :src="'http://127.0.0.1:8000/media/'+item.img"
                    width="70"
                    height="60"
                    alt="Responsive image"
                  ></b-img>
                </b-form-checkbox>
              </div>
            </b-td>
            <b-th rowspan="3" v-if="item.number">
              <span>尺寸:{{ item.cc }}</span>
              <br />
              <span>颜色:{{ item.color }}</span>
            </b-th>
            <b-td rowspan="3" v-if="item.number">¥{{item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number">
              <b-button
                squared
                variant="info"
                @click="reduce2(item.cc,item.color)"
                :disabled=" monitor2(item.number) "
              >-</b-button>
              {{ item.number }}
              <b-button squared variant="info" @click="add2(item.cc,item.color)">+</b-button>
            </b-td>
            <b-td rowspan="3" v-if="item.number">¥{{ item.number*item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number">
              <b-button variant="outline-dark" @click="del2(item.index)">删除</b-button>
            </b-td>
          </b-tr>
        </b-tbody>
        <b-tbody v-for="item in data_3" :key="item">
          <b-tr>
            <b-td rowspan="3" v-if="item.number">
              <div>
                <b-form-checkbox
                  :id="item.id"
                  :name="item.id"
                  :value="item.id"
                  unchecked-value="false"
                  v-model="item.check"
                  v-bind="re3(item.id,item.check,item.number,item.index,item.price)"
                >
                  <b-img
                    :src="'http://127.0.0.1:8000/media/'+item.img"
                    width="70"
                    height="60"
                    alt="Responsive image"
                  ></b-img>
                </b-form-checkbox>
              </div>
            </b-td>
            <b-th rowspan="3" v-if="item.number">
              <span>尺寸:{{ item.cc }}</span>
              <br />
              <span>颜色:{{ item.color }}</span>
            </b-th>
            <b-td rowspan="3" v-if="item.number">¥{{item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number">
              <b-button
                squared
                variant="info"
                @click="reduce3(item.cc,item.color)"
                :disabled=" monitor3(item.number) "
              >-</b-button>
              {{ item.number }}
              <b-button squared variant="info" @click="add3(item.cc,item.color)">+</b-button>
            </b-td>
            <b-td rowspan="3" v-if="item.number">¥{{ item.number*item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number">
              <b-button variant="outline-dark" @click="del3(item.index)">删除</b-button>
            </b-td>
          </b-tr>
        </b-tbody>
        <!-- <b-tfoot>
            <b-tr>
              <b-td colspan="7" variant="secondary" class="text-right">
                Total Rows:
                <b>5</b>
              </b-td>
            </b-tr>
        </b-tfoot>-->
      </b-table-simple>
    </div>
    <!-- {{ data_1 }} -->
    <!--<br />
    {{ data_2 }}
    <br />
    {{ data_3 }}***
    -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      data_1: "",
      data_2: "",
      data_3: "",
      d1cl: 0,
      d2cl: 0,
      d3cl: 0,
      d1pl: 0,
      d2pl: 0,
      d3pl: 0
      // all: ""
    };
  },
  methods: {
    reduce1(msg1, msg2) {
      for (var item in this.data_1) {
        if (this.data_1[item].cc == msg1 && this.data_1[item].color == msg2) {
          this.data_1[item].number--;
        }
      }
      localStorage.setItem("安踏A蓝色小尺寸", JSON.stringify(this.data_1));
      this.data_1 = JSON.parse(localStorage.getItem("安踏A蓝色小尺寸"));
    },
    add1(msg1, msg2) {
      for (var item in this.data_1) {
        if (this.data_1[item].cc == msg1 && this.data_1[item].color == msg2) {
          this.data_1[item].number++;
        }
        localStorage.setItem("安踏A蓝色小尺寸", JSON.stringify(this.data_1));
        this.data_1 = JSON.parse(localStorage.getItem("安踏A蓝色小尺寸"));
      }
    },
    del1(msg) {
      this.data_1[msg].number = 0;
      this.data_1[msg].count = 0;
      this.data_1[msg].pay = 0;
      localStorage.setItem("安踏A蓝色小尺寸", JSON.stringify(this.data_1));
      this.data_1 = JSON.parse(localStorage.getItem("安踏A蓝色小尺寸"));
    },
    monitor1(msg) {
      if (msg < 2) {
        return true;
      } else {
        return false;
      }
    },
    reduce2(msg1, msg2) {
      for (var item in this.data_2) {
        if (this.data_2[item].cc == msg1 && this.data_2[item].color == msg2) {
          this.data_2[item].number--;
        }
      }
      localStorage.setItem("安踏B蓝色小尺寸", JSON.stringify(this.data_2));
      this.data_2 = JSON.parse(localStorage.getItem("安踏B蓝色小尺寸"));
    },
    add2(msg1, msg2) {
      for (var item in this.data_2) {
        if (this.data_2[item].cc == msg1 && this.data_2[item].color == msg2) {
          this.data_2[item].number++;
        }
        localStorage.setItem("安踏B蓝色小尺寸", JSON.stringify(this.data_2));
        this.data_2 = JSON.parse(localStorage.getItem("安踏B蓝色小尺寸"));
      }
    },
    del2(msg) {
      this.data_2[msg].number = 0;
      this.data_2[msg].count = 0;
      this.data_2[msg].pay = 0;
      localStorage.setItem("安踏B蓝色小尺寸", JSON.stringify(this.data_2));
      this.data_2 = JSON.parse(localStorage.getItem("安踏B蓝色小尺寸"));
    },
    monitor2(msg) {
      if (msg < 2) {
        return true;
      } else {
        return false;
      }
    },
    reduce3(msg1, msg2) {
      for (var item in this.data_3) {
        if (this.data_3[item].cc == msg1 && this.data_3[item].color == msg2) {
          this.data_3[item].number--;
        }
      }
      localStorage.setItem("安踏A灰色大尺寸", JSON.stringify(this.data_3));
      this.data_3 = JSON.parse(localStorage.getItem("安踏A灰色大尺寸"));
    },
    add3(msg1, msg2) {
      for (var item in this.data_3) {
        if (this.data_3[item].cc == msg1 && this.data_3[item].color == msg2) {
          this.data_3[item].number++;
        }
        localStorage.setItem("安踏A灰色大尺寸", JSON.stringify(this.data_3));
        this.data_3 = JSON.parse(localStorage.getItem("安踏A灰色大尺寸"));
      }
    },
    del3(msg) {
      this.data_3[msg].number = 0;
      this.data_3[msg].count = 0;
      this.data_3[msg].pay = 0;
      localStorage.setItem("安踏A灰色大尺寸", JSON.stringify(this.data_3));
      this.data_3 = JSON.parse(localStorage.getItem("安踏A灰色大尺寸"));
    },
    monitor3(msg) {
      if (msg < 2) {
        return true;
      } else {
        return false;
      }
    },
    re1(msg1, msg2, msg3, msg5, msg6) {
      if (msg1 == msg2 && msg3 != 0) {
        this.data_1[msg5].count = 1;
        this.data_1[msg5].pay = msg3 * msg6;
      } else {
        this.data_1[msg5].count = 0;
        this.data_1[msg5].pay = msg3 * 0;
      }
      localStorage.setItem("安踏A蓝色小尺寸", JSON.stringify(this.data_1));
    },
    re2(msg1, msg2, msg3, msg5, msg6) {
      if (msg1 == msg2 && msg3 != 0) {
        this.data_2[msg5].count = 1;
        this.data_2[msg5].pay = msg3 * msg6;
      } else {
        this.data_2[msg5].count = 0;
        this.data_2[msg5].pay = msg3 * 0;
      }
      localStorage.setItem("安踏B蓝色小尺寸", JSON.stringify(this.data_2));
    },
    re3(msg1, msg2, msg3, msg5, msg6) {
      if (msg1 == msg2 && msg3 != 0) {
        this.data_3[msg5].count = 1;
        this.data_3[msg5].pay = msg3 * msg6;
      } else {
        this.data_3[msg5].count = 0;
        this.data_3[msg5].pay = msg3 * 0;
      }
      localStorage.setItem("安踏A灰色大尺寸", JSON.stringify(this.data_3));
    },
    count() {
      if (this.data_1) {
        this.d1cl =
          this.data_1[0].count +
          this.data_1[1].count +
          this.data_1[2].count +
          this.data_1[3].count;
      }
      if (this.data_2) {
        this.d2cl =
          this.data_2[0].count +
          this.data_2[1].count +
          this.data_2[2].count +
          this.data_2[3].count;
      }
      if (this.data_3) {
        this.d3cl =
          this.data_3[0].count +
          this.data_3[1].count +
          this.data_3[2].count +
          this.data_3[3].count;
      }
    },
    pay() {
      if (this.data_1) {
        this.d1pl =
          this.data_1[0].pay +
          this.data_1[1].pay +
          this.data_1[2].pay +
          this.data_1[3].pay;
      }
      if (this.data_2) {
        this.d2pl =
          this.data_2[0].pay +
          this.data_2[1].pay +
          this.data_2[2].pay +
          this.data_2[3].pay;
      }
      if (this.data_3) {
        this.d3pl =
          this.data_3[0].pay +
          this.data_3[1].pay +
          this.data_3[2].pay +
          this.data_3[3].pay;
      }
    },
    tz() {
      if (this.d1cl + this.d2cl + this.d3cl == 0) {
        return true;
      } else {
        return false;
      }
    },
    fun2() {
      if (!localStorage.getItem("dashopt_bv_user")) {
        alert("请登录后结算");
        this.$router.push("/register");
      } else {
        this.$router.push("/pay");
      }
    }
    // all_() {
    // if (this.all) {
    // for (var item in this.data_1) {
    // if (this.data_1[item].check == false) {
    // this.data_1[4].all = "not_accepted";
    // localStorage.setItem(
    // "安踏A蓝色小尺寸",
    // JSON.stringify(this.data_1)
    // );
    // }
    // }
    // if (this.all == "accepted") {
    // for (var item in this.data_1) {
    // this.data_1[item].check = this.data_1[item].id;
    // }
    // localStorage.setItem("安踏A蓝色小尺寸", JSON.stringify(this.data_1));
    // for (var item in this.data_2) {
    // this.data_2[item].check = this.data_2[item].id;
    // }
    // localStorage.setItem("安踏B蓝色小尺寸", JSON.stringify(this.data_2));
    // for (var item in this.data_3) {
    // this.data_3[item].check = this.data_3[item].id;
    // }
    // this.data_1[4].all = "accepted";
    // localStorage.setItem("安踏A灰色大尺寸", JSON.stringify(this.data_3));
    // } else {
    // this.all = "not_accepted";
    // for (var item in this.data_1) {
    // this.data_1[item].check = false;
    // }
    // for (var item in this.data_2) {
    // this.data_2[item].check = false;
    // }
    // for (var item in this.data_3) {
    // this.data_3[item].check = false;
    // }
    // this.data_1[4].all = "not_accepted";
    // localStorage.setItem("安踏A蓝色小尺寸", JSON.stringify(this.data_1));
    // localStorage.setItem("安踏B蓝色小尺寸", JSON.stringify(this.data_2));
    // localStorage.setItem("安踏A灰色大尺寸", JSON.stringify(this.data_3));
    // }
    // }
    // }
  },
  created() {
    if (JSON.parse(localStorage.getItem("安踏A蓝色小尺寸"))) {
      this.data_1 = JSON.parse(localStorage.getItem("安踏A蓝色小尺寸"));
    }
    if (JSON.parse(localStorage.getItem("安踏B蓝色小尺寸"))) {
      this.data_2 = JSON.parse(localStorage.getItem("安踏B蓝色小尺寸"));
    }
    if (JSON.parse(localStorage.getItem("安踏A灰色大尺寸"))) {
      this.data_3 = JSON.parse(localStorage.getItem("安踏A灰色大尺寸"));
    }
    // if (JSON.parse(localStorage.getItem("安踏A蓝色小尺寸"))[4].all) {
    // this.all = JSON.parse(localStorage.getItem("安踏A蓝色小尺寸"))[4].all;
    // }
  }
};
</script>
