<template>
    <div class="hello">
        <van-button type="info">信息按钮</van-button>
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
        <van-row></van-row>

        <van-row>
            <van-icon name="chat-o" color="blue" dot />
            <van-icon name="chat-o" color="red" info="33" />
        </van-row>
        <van-row>
            <van-col span="11">
                <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
            <van-col span="11">
                <!-- <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>-->
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
                    <template v-slot:error>加载失败</template>
                </van-image>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            isLasy: false
        };
    },
    created() {
        this.isLasy = true;
        setTimeout(() => {
            this.isLasy = false;
        }, 10000);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
