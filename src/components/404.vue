<template>
    <div class="notfound-wrap">
        <img style="width: 60%;" src="//cdnfile.aixifan.com/static/img/404.da3e7ee2.png" alt="">
        <p>
            内容失踪了，去主页试试别的哦！
        </p>
        <a href="/" class="down-app">点我试试看</a>
    </div>
</template>

<style lang="less" scoped>
.notfound-wrap {
    margin: .88rem .33rem 0;
    text-align: center;
    height: calc(100vh - rem(176));
    box-sizing: border-box;
    margin-top: 200px;


    p {
        margin: .3rem 2%;
        text-align: center;
        color: #888;
        font-size: .28rem;
        width: 96%;
    }
    .down-app {
        display: block;
        font-size: .3rem;
        color: #fff;
        text-align: center;
        line-height: 40px;
        background: #fd4c5b;
        border-radius: 49px;
        width: 70%;
        height: 40px;
        margin: 20px auto;
        text-decoration: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
}
</style>