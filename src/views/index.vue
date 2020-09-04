<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/images/index/index_banner1.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/images/index/index_banner2.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/images/index/index_banner3.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/images/index/index_banner4.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../public/images/index/index_banner5.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <div>
      <b-card-group deck>
        <b-card
          title="¥1829.00"
          img-src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/765362013/O1CN01s6nOPK1QjzsqoC61W_!!765362013-0-lubanu-s.jpg_250x250.jpg"
          img-alt="Image"
          img-top
          blank-color
        >
          <a
            href="https://detail.tmall.com/item.htm?spm=a230r.1.14.295.2bcc2caeEFTmZO&id=619024365195&ns=1&abbucket=9"
          >
            <b-card-text>香港直邮MOSCHINO莫斯奇诺 女士黑色尼龙logo印花时尚双肩包</b-card-text>
          </a>
          <template v-slot:footer>
            <small class="text-muted">hr旗舰店</small>
          </template>
        </b-card>
        <b-card
          title="¥369.00"
          img-src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/676606897/O1CN01if8Swh20osGA6sdMo_!!0-item_pic.jpg_250x250.jpg_.webp"
          img-alt="Image"
          img-top
        >
          <a
            href="https://detail.tmall.com/item.htm?spm=a230r.1.14.303.2bcc2caeEFTmZO&id=611155565489&ns=1&abbucket=9&sku_properties=10537981:30187193"
          >
            <b-card-text>FILA 斐乐官方 女子背包 2020春季新款时尚满版印花双肩背包女包</b-card-text>
          </a>
          <template v-slot:footer>
            <small class="text-muted">fila官方旗舰店</small>
          </template>
        </b-card>
        <b-card
          title="¥199"
          img-src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2104668892/O1CN01CUDiXt2FYaQLEtCqx_!!0-item_pic.jpg_250x250.jpg_.webp"
          img-alt="Image"
          img-top
        >
          <a
            href="https://detail.tmall.com/item.htm?spm=a230r.1.14.358.2bcc2caeEFTmZO&id=621520643148&ns=1&abbucket=9"
          >
            <b-card-text>URBAN REVIVO2020夏季新品男士配件简约休闲双肩包AM22TB5N2000</b-card-text>
          </a>
          <template v-slot:footer>
            <small class="text-muted">ur官方旗舰店</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <div v-if="code()==200">
      <b-card no-body>
        <b-tabs card>
          <div v-for="item in msg.data.data" :key="item">
            <b-tab :title="''+item.catalog_name" active>
              <div v-for="cards in msg.data.data[0].sku" :key="cards">
                <b-card
                  :title="''+cards.name"
                  :img-src="msg.data.base_url+cards.image"
                  img-alt="Image"
                  img-top
                >
                  <div v-if="cards.name ==='安踏A蓝色小尺寸'">
                    <router-link to="详情页1">
                      <b-card-text>{{ cards.caption }}</b-card-text>
                    </router-link>
                  </div>
                  <div v-else-if="cards.name ==='安踏A灰色大尺寸'">
                    <router-link to="详情页2">
                      <b-card-text>{{ cards.caption }}</b-card-text>
                    </router-link>
                  </div>
                  <div v-else-if="cards.name ==='安踏B蓝色小尺寸'">
                    <router-link to="详情页3">
                      <b-card-text>{{ cards.caption }}</b-card-text>
                    </router-link>
                  </div>
                  <template v-slot:footer>
                    <small class="text-muted">{{ '¥'+cards.price }}</small>
                  </template>
                </b-card>
              </div>
            </b-tab>
          </div>
          <b-tab title="Tab 2">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      msg: null
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/v1/goods/index")
      .then(response =>
        (this.msg = response).catch(error => console.log(error))
      );
  },
  methods: {
    code: function() {
      return this.msg.data.code;
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: lightblue;
}
</style>