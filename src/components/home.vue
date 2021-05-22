<template>
    <div class="home">
        <h3>嘟嘟嘟啊哦的夏日卧室</h3>
        <p>你想要的这里都有</p>
        <div v-for="(item) in routerList" :key="item.id" :to="item.path" @click="toJump(item)">{{item.title}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routerList: [
                {
                    title: '电风扇',
                    path: '/electricFan',
                    id: '110',
                },
                {
                    title: '电视机',
                    path: '/tv',
                    id: '112',
                },
                {
                    title: '打电动',
                    path: 'https://www.yikm.net/',
                    id: '120',
                },{
                    title: '红色警戒',
                    path: 'https://game.chronodivide.com/',
                    id: '121',
                }
            ]
        }
    },
    methods: {
        toJump(item) {
            if (item.id.indexOf(11) !== -1) {
                this.$router.push(item.path);
                return;
            }
            location.href = item.path;
        }
    }
}
</script>

<style lang="less" scopd>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}

.home {
    h3 {
        font-size: 30px;
        margin-bottom: 30px;
    }

    div {
        display: block;
        cursor: pointer;
        text-decoration: none;
        color: #000;
        margin: 20px 0;
    }
}
</style>

