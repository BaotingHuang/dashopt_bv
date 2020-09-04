<template>
  <div>
    <div>
      <b-nav>
        <b-nav-item disabled>确定商品信息</b-nav-item>
      </b-nav>
    </div>
    <div>
      <b-table-simple hover small caption-top responsive>
        <b-thead head-variant="light">
          <b-tr>
            <b-th></b-th>
            <b-th>商品</b-th>
            <b-th>单价(元)</b-th>
            <b-th>数量</b-th>
            <b-th>金额</b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="item in data_1" :key="item">
          <b-tr>
            <b-td rowspan="3" v-if="item.number&&item.count">
              <div>
                <b-img
                  :src="'http://127.0.0.1:8000/media/'+item.img"
                  width="70"
                  height="60"
                  alt="Responsive image"
                ></b-img>
              </div>
            </b-td>
            <b-th rowspan="3" v-if="item.number&&item.count">
              <span>尺寸:{{ item.cc }}</span>
              <br />
              <span>颜色:{{ item.color }}</span>
            </b-th>
            <b-td rowspan="3" v-if="item.number&&item.count">¥{{item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number&&item.count">{{ item.number }}</b-td>
            <b-td rowspan="3" v-if="item.number&&item.count">¥{{ item.number*item.price }}</b-td>
          </b-tr>
        </b-tbody>
        <b-tbody v-for="item in data_2" :key="item">
          <b-tr>
            <b-td rowspan="3" v-if="item.number&&item.count">
              <div>
                <b-img
                  :src="'http://127.0.0.1:8000/media/'+item.img"
                  width="70"
                  height="60"
                  alt="Responsive image"
                ></b-img>
              </div>
            </b-td>
            <b-th rowspan="3" v-if="item.number&&item.count">
              <span>尺寸:{{ item.cc }}</span>
              <br />
              <span>颜色:{{ item.color }}</span>
            </b-th>
            <b-td rowspan="3" v-if="item.number&&item.count">¥{{item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number&&item.count">{{ item.number }}</b-td>
            <b-td rowspan="3" v-if="item.number&&item.count">¥{{ item.number*item.price }}</b-td>
          </b-tr>
        </b-tbody>
        <b-tbody v-for="item in data_3" :key="item">
          <b-tr>
            <b-td rowspan="3" v-if="item.number&&item.count">
              <div>
                <b-img
                  :src="'http://127.0.0.1:8000/media/'+item.img"
                  width="70"
                  height="60"
                  alt="Responsive image"
                ></b-img>
              </div>
            </b-td>
            <b-th rowspan="3" v-if="item.number&&item.count">
              <span>尺寸:{{ item.cc }}</span>
              <br />
              <span>颜色:{{ item.color }}</span>
            </b-th>
            <b-td rowspan="3" v-if="item.number&&item.count">¥{{item.price }}</b-td>
            <b-td rowspan="3" v-if="item.number&&item.count">{{ item.number }}</b-td>
            <b-td rowspan="3" v-if="item.number&&item.count">¥{{ item.number*item.price }}</b-td>
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
    {{ bg() }}
    <b-list-group v-if="address">
      <b-list-group-item>收货地址信息</b-list-group-item>
      <b-list-group-item>收货人地址:{{ address.address }} 收货人号码:{{ address.receiver_mobile }}</b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data_1: JSON.parse(localStorage.getItem("安踏A蓝色小尺寸")),
      data_2: "",
      data_3: "",
      d1cl: 0,
      d2cl: 0,
      d3cl: 0,
      d1pl: 0,
      d2pl: 0,
      d3pl: 0,
      address: 0
    };
  },
  methods: {
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
    bg() {
      var that = this;
      axios
        .get(
          "http://127.0.0.1:8000/v1/users/" +
            localStorage.getItem("dashopt_bv_user") +
            "/address",
          {
            headers: {
              Authorization: localStorage.getItem("dashopt_bv_token")
            }
          }
        )
        .then(function(response) {
          if (response.data.code == 200) {
            console.log(response.data.addresslist[0]);
            that.address = response.data.addresslist[0];
          }
        });
    }
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
  }
};
</script>
