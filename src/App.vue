<style>
:root {
  --max-width: 900px;
  --main-color: #9e7de8;
}

html,
body {
  height: 100%;
  margin: 0;
  box-sizing: border-box;
}

img {
  user-select: none;
  -webkit-user-drag: none;
}

.component_dialog {
  background-image: linear-gradient(315deg, #cfd4ff, #f8efff) !important;
  border-radius: 10px !important;
  overflow: hidden;
}

.component_dialog_bd {
  color: #680d78 !important;
}


.component_btn {
  cursor: pointer;
  user-select: none;
  color: #0094fd !important;
}


.container {
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  background-color: #bf2ff5;
  background-image: url(https://img.alicdn.com/imgextra/i2/917298378/O1CN01xLUmZm2BlB6HEf6pJ_!!917298378.png);
}

.header {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lucky {
  width: 100%;
  /* height: calc(100% * 1951 / 1080);
  background-image: url(https://img.alicdn.com/imgextra/i1/917298378/O1CN01FS5Kz12BlB3KXH1Wq_!!917298378.jpg);
  background-size: cover; */
}

.lucky img {
  width: 100%;
  height: 100%;
  user-select: none;
  display: block;
}

.lucky-top,
.lucky-center,
.lucky-bottom {
  width: 100%;
  height: 100%;
}

.lucky-center {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}

.lucky-bottom {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  width: 100%;
}

.luckypanel {
  position: absolute;
}

.description {
  width: 100%;
}

.description div {
  box-sizing: border-box;
}

.description-content {
  width: 100%;
  height: 100%;
  padding: 0 10px;
}

.footer {
  widows: 100%;
  color: #fff;
}

.footer div {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  /* background-color: antiquewhite; */
}

.card-title {
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
}

.card-box {
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  background-image: linear-gradient(315deg, #e3e0ff, #ffffff);
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 15px;
  min-height: 80px;
}

.card-box>p {
  color: #272727;
}

.count-box {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.count {
  color: #fff;
  text-align: center;
}

.award-alert {
  width: 100%;
}

.award-alert strong {
  color: var(--main-color);
  font-size: 24px;
}

.award-alert img {
  width: 250px;
}

.award-alert p {
  color: #272727;
}
</style>

<style scoped>
.falling-image {
  transform: translateY(-100%);
  animation: fall 1.5s ease-in 1s forwards;
}

@keyframes fall {
  0% {
    transform: translateY(-100%);
  }

  50% {
    transform: translateY(30%);
  }

  60% {
    transform: translateY(-10%);
  }

  70% {
    transform: translateY(20%);
  }

  80% {
    transform: translateY(-5%);
  }

  90% {
    transform: translateY(10%);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>

<script setup>
import PrizesShow from './components/PrizesShow.vue'
</script>

<template>
  <div class="container">
    <div class="layout">
      <div class="content">
        <div class="lucky" ref="luckyRef" :style="luckyStyle">
          <div class="lucky-top">
            <img :src="imageSrc" :class="{ 'falling-image': animate }" @load="handleImageLoad" alt="">
          </div>
          <div class="lucky-center">
            <img src="https://img.alicdn.com/imgextra/i2/917298378/O1CN01jbE9Bq2BlB6QEhjGv_!!917298378.png" alt="">
            <div class="luckypanel" ref="luckypanel">
              <LuckyWheel ref="myLucky" :width="310" :height="310" :prizes="prizes" :blocks="blocks" :buttons="buttons"
                @start="startCallback" @end="endCallback" />
            </div>
          </div>
          <div class="lucky-bottom">
            <div class="count-box">
              <p class="count">還剩 {{ count }} 次抽獎機會</p>
            </div>
          </div>
        </div>
        <div class="description">
          <div class="description-content">
            <div class="card-title">•● 活動獎品 ●•</div>
            <div class="card-box">
              <PrizesShow :awards="awards" />
            </div>
            <div class="card-title">•● 我的獎品 ●•</div>
            <div class="card-box">
              <PrizesShow :awards="myAwards" />
            </div>
            <div class="card-title">•● 抽獎說明 ●•</div>
            <div class="card-box">
              <p>抽中獎品後，請聯繫客服領取</p>
              <p>若無抽獎次數或者權限，請添加官方line號，諮詢客服領取</p>
            </div>

            <div class="footer">
              <div>Copyright © 2023 LIZHONGYI</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
let swidth = window.screen.width
if (swidth > 900) {
  swidth = 900;
}
let initWidth = Math.round(swidth * 26 / 39);
export default {
  data() {
    return {
      imageSrc: "https://img.alicdn.com/imgextra/i4/917298378/O1CN01i4KjCD2BlB6LpIfud_!!917298378.png",
      animate: false, // 是否执行动画
      blocks: [
        { padding: '0', background: '#f4b6f5' }
      ],
      prizes: [],
      buttons: [
        {
          radius: '50%',
          imgs: [{
            src: "https://img.alicdn.com/imgextra/i4/917298378/O1CN01Xv6sxX2BlB6Lo3oHl_!!917298378.png",
            width: '50%',
            top: '-80%'
          }],
          fonts: [{ text: '開始', top: '-10px', fontColor: '#fff', fontSize: '18px' }],
          pointer: true,
        },
      ],
      passport: '',
      myAwards: [],
      currentUser: null,
      awards: [],
      power: false,
      panelWidth: initWidth,
      luckyStyle: {},
      screenWidth: document.body.clientWidth,
      prizeWidth: 60,
      prizeFontSize: 16,
      count: 0,
    }
  },
  created() {
    this.getPrizeList()
    this.initUserData()
  },
  mounted() {
    this.calculationStyle()
    const that = this
    window.onresize = () => {
      return (() => {
        that.calculationStyle()
      })()
    }
    window.onhashchange = function () {
      let hash = window.location.hash.replace("#", "")
      if (hash) {
        localStorage.setItem("passport", hash)
        const indexUrl = location.protocol + "//" + location.host
        history.replaceState(null, null, indexUrl)
      }
      that.initUserData()
    }
  },
  methods: {
    initUserData() {
      let passport = localStorage.getItem('passport')
      this.passport = passport ?? ''
      if (this.passport) {
        this.fetchCurrentUser()
      }
    },
    calculationStyle() {
      let width = this.$refs.luckyRef.clientWidth || window.screen.width;
      if (width > 900) {
        width = 900;
      }
      let scale = width / 390
      this.$refs.luckypanel.style.transform = "scale(" + scale + ")";
      return
      //390窗口宽度，260的转盘高度
      this.panelWidth = Math.round(width * 26 / 39);
      this.prizeWidth = Math.round(width * 6 / 39);
      this.prizeFontSize = Math.round(width * 16 / 390);
    },
    getPanelWidth() {
      let width = this.$refs.luckyRef.clientWidth || window.screen.width;
      return Math.round(width * 26 / 39);
    },
    checkColor(index) {
      let color = "#f2e8fe";
      switch (index % 2) {
        case 0:
          color = "#f2e8fe";
          break;
        default:
          color = "#ffffff";
          break;
      }
      return color;
    },
    // 点击抽奖按钮会触发star回调
    startCallback() {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play()
      this.setLuckyIndex()
    },
    // 抽奖结束会触发end回调
    endCallback(prize) {
      if (!prize.id) return
      const award = this.getAward(prize)
      if (!award) return this.showAlert("程序錯誤，請刷新後重試")
      this.showAward(award)
      // this.showAlert("恭喜你抽中了[" + award.name + "]: " + award.description)
      this.myAwards.push(award)
    },
    setLuckyIndex() {
      const resp = axios.post(this.baseUrl + "/api/luckydraw", { passport: this.passport, activityUuid: this.campaignUuid })
      resp.then(res => {
        if (!res.data.success) {
          throw new Error(res.data.errorMessage)
        }
        const award = res.data.data
        const index = this.getPrizeIndex(award)
        if (this.count > 0) {
          this.count--
        }
        setTimeout(() => {
          if (index === -1) {
            throw new Error("出錯了，請稍後再重試！")
          }
          // 调用stop停止旋转并传递中奖索引
          this.$refs.myLucky.stop(index)
        }, 3000)
      }).catch(err => {
        this.$refs.myLucky.init()
        this.showAlert(err)
      })
    },
    getPrizeIndex(award) {
      const id = award.id
      let index = this.prizes.findIndex((item, index) => {
        if (item.id == id && index == item.index) {
          return item
        }
      })
      return index
    },
    getAward(prize) {
      const id = prize.id
      for (let i = 0; i < this.awards.length; i++) {
        if (this.awards[i].id == id) {
          return this.awards[i]
        }
      }
      return null
    },
    showAlert(err) {
      if (!err) return
      const alert = new window.AlertClass();
      alert.show({
        title: '提示',
        content: err.message || err,
        btnText: '我知道了',
        onShow: function () {

        },
        onHide: function () {

        }
      })
    },
    showAward(award) {
      const alert = new window.AlertClass();
      alert.show({
        title: '中獎啦',
        content: "<div class=award-alert><strong>" + award.grade + "</strong><br/>" + "<img src=" + award.image + "><br/><p>" + award.name + "</p></div>",
        btnText: '立即去領獎',
        onShow: function () {

        },
        onHide: function () {

        }
      })
    },
    getPrizeList() {
      const resp = axios.post(this.baseUrl + "/api/awards/list", { activityUuid: this.campaignUuid })
      resp.then(res => {
        if (!res.data.success) {
          throw new Error(res.data.errorMessage)
        }
        const prizes = [];
        const data = res.data.data
        //判断是否为数组
        if (!Array.isArray(data)) {
          throw new Error("數據格式錯誤");
        }
        this.awards = data;
        data.forEach((item, index) => {
          const prize = {
            index: index,
            id: item.id,
            background: this.checkColor(item.id),
            fonts: [
              {
                text: item.grade,
                top: '5px',
                fontColor: "#7a4ae6",
                // fontSize: this.prizeFontSize,
                fontSize: "16px",
              }
            ],
            imgs: [
              {
                src: item.image,
                // width: this.prizeWidth,
                width: "60px",
                // height: this.prizeWidth,
                height: "60px",
                // top: this.prizeWidth / 2,
                top: "25px",
                rotate: true,
              }
            ]
          }
          prizes.push(prize)
        })
        this.prizes = prizes;
      }).catch(err => {
        this.showAlert(err)
      });
    },
    queryAwards() {
      const resp2 = axios.post(this.baseUrl + "/api/winningRecords/query", { activityUuid: this.campaignUuid, passport: this.passport })
      resp2.then(res => {
        if (!res.data.success) {
          throw new Error(res.data.errorMessage)
        }
        const data = res.data.data;
        if (!Array.isArray(data)) {
          throw new Error("數據格式錯誤");
        }
        const awards = []
        data.forEach((item, index) => {
          awards.push(item.award)
        })
        this.myAwards = awards
      }).catch(err => {
        this.showAlert(err)
      });
    },
    fetchCurrentUser() {
      const resp3 = axios.post(this.baseUrl + "/api/users/currentUser", { activityUuid: this.campaignUuid, passport: this.passport })
      resp3.then(res => {
        if (res.data == null) {
          this.count = 0;
          return
        }
        if (!res.data.success) {
          throw new Error(res.data.errorMessage)
        }
        const user = res.data.data;
        if (!user) {
          throw new Error("數據格式錯誤");
        }
        let count = user.total - user.count;
        if (count < 0) {
          count = 0;
        }
        this.count = count;
        this.queryAwards();
      }).catch(err => {
        this.showAlert(err)
      })
    },
    handleImageLoad() {
      this.animate = true; // 图片加载完成后触发动画
    },
  }
}
</script>
