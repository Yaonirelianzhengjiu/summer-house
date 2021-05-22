<template>
    <div class="fangshan">
        <h3>夏日小风扇</h3>
        <p>除了没有风，什么都好</p>
        <div class="box2">
            <div class="center" ref="nob1"></div>
            <div :class="[!run ? 'box2__wrapper' : '',  run ? `box2__wrapper__animation${run ? closeNum : '' }`: '']" :key="closeNum">

                <div class="nob nob_1" ></div>
                <div class="nob nob_2" ></div>
                <div class="nob nob_3" ></div>
            </div>

        </div>
        <div class="shu"></div>
        <div class="pan"></div>

        <div class="controller">
            <div class="controller__item" v-for="(item, index) in controllerItem" :key="index" :class="index === closeNum ? 'active' : ''" @click="toRun(index)">{{item}}</div>
        </div>

        <div class="content" @click="popClk">
            <img src="@/assets/naicha.jpg" alt="">
        </div>
        
        <div class="qr_code" :class="popAnimation ? 'fade_in' : 'fade_out'" v-show="popShow">
            <div class="qr_code_wrapper">
                <img src="@/assets/qr.jpg" alt="" class="qr">
                <img src="@/assets/next.png" alt="" class="next" @click="popClk(2)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      interval: null,
      closeNum: 0,
      controllerItem: ['关', 1, 2, 3],
      timer: null,
      run: false,
      removeRotate: false,
      popShow: false,
      popAnimation: false,
    }
  },
  methods: {
    toRun(index) {
        this.closeNum = index;
        this.run = true;
    },

    popClk(params = 1) {
        if (params === 2) {
            this.popAnimation = false;
            setTimeout(() => { this.popShow = false }, 2000)
            return;
        }
        this.popAnimation = true;
        this.popShow = true;
    }
  }
}
</script>
<style lang="less">
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.fangshan {
    margin: 50px auto 0 auto;
    width: 300px;

    position: relative;

    h3 {
        font-size: 35px;
    }

    p {
        font-size: 18px;
        margin: 20px 0;
    }


    .box2 {
        width: 220px;
        height: 220px;
        margin: 0 auto;
        border-radius: 50%;
        border: 8px solid #000;
        position: relative;
        display: flex;

        margin: 40px auto 0;

        .box2__wrapper,  .box2__wrapper__animation0, .box2__wrapper__animation1, .box2__wrapper__animation2, .box2__wrapper__animation3 {
            width: 100%;
            height: 100%;
            display: flex;

            animation: rotatefresh 0s infinite linear;
        }

        
        .box2__wrapper__animation0 {
            animation-duration: 3s;
            animation-timing-function: ease-out;
            animation-delay: 0s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }

        .box2__wrapper__animation1 {                
            animation-duration: 2s;
        }

        .box2__wrapper__animation2 {
            animation-duration: 1s;
        }

        .box2__wrapper__animation3 {
            animation-duration: .5s;
        }

        .center {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #000;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .nob {
            width: 72px;
            height: 60px;
            border-radius: 20% 50%;
            border: 8px solid #000;
            position: absolute;
            left: 111px;
            top: 111px;
            transform-origin: 0 0;
        }

        .nob_2 {
            transform: rotate(120deg);
        }

        .nob_3 {
            transform: rotate(240deg);
        }
    }

    .shu {
        width: 10px;
        height: 50px;

        margin: 0 auto;
        background-color: #000;
    }

    .pan {
        width: 100px;
        height: 10px;

        margin: 0 auto;
        background-color: #000;
    }

    .controller {
        width: 250px;

        display: flex;
        align-content: center;

        border: 1px solid;
        border-right: none;

        margin: 20px auto 0;

        &__item {
            width: 70px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-right: 1px solid;
        }
    }

    .active {
        background: rgba(100,100,100);
        color: #fff
    }

    .content {
        width: 300px;
        margin: 60px auto 0;
        text-align: center;

        img {
            width: 300px;
        }
    }

    .qr_code {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.85);

        position: fixed;
        top: 0;
        left: 0;

        &_wrapper {
            width: 300px;
            height: 340px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url('../assets/qrbg.jpg') no-repeat center;
            background-size: 100% 100%;
            border-radius: 15px;
        }

        .qr {
            width: 163px;
            margin-top: 60px;
        }

        .next {
            width: 140px;
            margin-top: 36px;
        }
    }

    .fade_in {
        animation: fadeIn 2s;
    }

    .fade_out {
        animation: fadeOut 2s;
    }

    @keyframes rotatefresh {
        from { transform: rotate(0deg) }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to {
            opacity: 1;
            transition: all 2s;
        }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to {
            opacity: 0;
            transition: all 2s;
        }
    }
}
</style>
