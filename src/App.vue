<template>
  <el-container>
    <el-header>
      <img id="logo" src="./assets/logo1.png" alt="logo" />
      <h1 class="head-nav"><a href="#">放映厅</a></h1>
      <h1 class="head-nav"><a href="#">音乐</a></h1>
      <h1 class="head-nav"><a href="#">随记</a></h1>
    </el-header>
    <el-main>
      <!-- <iframe src="http://youku.hao-yongjiu.com/share/7b6982e584636e6a1cda934f1410299c"></iframe> -->
      <div class="Dplayer_main">
        <d-player ref="player" id="player" :options="options"></d-player>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Dplayer_main",
  data() {
    return {
      options: {
        container: document.getElementById("dplayer"), //播放器容器
        mutex: false, //  防止同时播放多个用户，在该用户开始播放时暂停其他用户
        theme: "#b7daff", // 风格颜色，例如播放条，音量条的颜色
        loop: false, // 是否自动循环
        lang: "zh-cn", // 语言，'en', 'zh-cn', 'zh-tw'
        screenshot: true, // 是否允许截图（按钮），点击可以自动将截图下载到本地
        hotkey: true, // 是否支持热键，调节音量，播放，暂停等
        preload: "auto", // 自动预加载
        volume: 0.7, // 初始化音量
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3], //可选的播放速度，可自定义
        video: {
          url:
            "https://qingxi.xi-zuida.com/20210214/1241_b3b11edb/index.m3u8", // 播放视频的路径
          type: 'hls',
          pluginOptions: {
        hls: {
            // hls config
        },
    },
          // quality: [
          //   // 设置多个质量的视频
          //   {
          //     name: "高清",
          //     url:
          //       "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",
          //     type: "auto", // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
          //   },
          //   {
          //     name: "标清",
          //     url:
          //       "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",
          //     type: "auto",
          //   },
          // ],
          defaultQuality: 0, // 默认是高清
          // https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0e2442a7d933c895ca486665d51373f0820200fd.jpg
          pic:
            "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0e2442a7d933c895ca486665d51373f0820200fd.jpg", // 视频封面图片
          // thumbnails:
          //   "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=24336452,906724543&fm=26&gp=0.jpg", // 进度条上的缩略图,需要通过dplayer-thumbnails来生成
        },
        // subtitle: {
        //   //字幕
        //   url: "", //字幕网址
        //   color: "#fff", //字幕颜色
        //   fontSize: "20px",
        //   bottom: "40px",
        // },
        // contextmenu: [
        //   //  自定义上下文菜单
        //   // 右键菜单
        //   {
        //     text: "b站",
        //     link: "https://www.bilibili.com",
        //   },
        //   {
        //     text: "选项二",
        //     click: (player) => {
        //       console.log(player);
        //     },
        //   },
        // ],
        // highlight: [
        //   //进度条上的自定义时间标记
        //   // 进度条时间点高亮
        //   {
        //     text: "10M",
        //     time: 6,
        //   },
        //   {
        //     text: "20M",
        //     time: 12,
        //   },
        // ],
      },
    };
  },
  mounted() {
    // 以下为隐藏一些作者的信息和视频播放源 如不需要可删除
    document.querySelector(".dplayer-menu").remove(); //隐藏右键菜单
    // document.querySelector(".dplayer-mask").remove();
    // document.querySelector(".dplayer-info-panel-item-url").remove(); //隐藏播放源
    // let length = document.querySelectorAll(".dplayer-menu-item").length;
    // document.querySelectorAll(".dplayer-menu-item")[length - 2].remove(); // 去掉作者信息
    // document.querySelectorAll(".dplayer-menu-item")[length - 1].remove(); // 去掉作者信息
  },
};
</script>

<style>
/* 初始化样式 */
@import "/assets/base.css/";
body {
  margin: 0px;
}

/* 导航栏 */
.el-header {
  background-color: rgb(250, 250, 250);
  height: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
}

#logo {
  height: 50%;
  /* margin-left: 22%; */
  margin-top: 17px;
}

.head-nav {
  margin-left: 10%;
  line-height: 40px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  color: #222;
}

/* main部分 */
.el-main {
  background-color: rgb(218, 28, 28);
  height: 900;
  display: flex;
  justify-content: center;
  text-align: center;
}

.video-box {
  width: 70%;
  height: 500px;
}

.head-nav a {
  text-decoration: none;
}

iframe {
  width: 100%;
}

.test {
  background-color: rgb(17, 226, 70);
}
.Dplayer_main {
  width: 1000px;
  height: 900px;
  margin: 10px auto;
  text-align: center;
}
</style>
