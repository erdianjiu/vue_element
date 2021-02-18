<template>
    <el-container>
      <el-header>
        <img id="logo" src="../assets/logo1.png" alt="logo">
        <h1 class="head-nav"><a href="#">放映厅</a></h1>
        <h1 class="head-nav"><a href="#">音乐</a></h1>
        <h1 class="head-nav"><a href="#">随记</a></h1>
       </el-header>
    </el-container>
  </template>

<script>
</script>


<style>
    /* 初始化样式 */
    
    @import "./assets/style/base.css";
    /* 导航栏 */
    
    .el-header {
        background-color: rgb(250, 250, 250);
        height: 80px;
        direction: vertical;
        display: flex;
    }
    
    #logo {
        height: 100%;
        margin-left: 20%;
    }
    
    .head-nav {
        text-align: center;
        margin-left: 100px;
        line-height: 60px;
    }
    /* main部分 */
    
    .el-main {
        background-color: #fff;
        ;
        height: 1000px;
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
</style>