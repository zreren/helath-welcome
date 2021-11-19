<template>
    <header class="banner">
        <img class="bannerImage" src="../../assets/image/vyJmODQ39o.jpg">
        <div class="mask"></div>
        <div class="content">
            <h1 class="h1">歡迎來到銀髮健康檢測平台</h1>
            <h2>查看健康相關資訊，在這裡閱讀營養食譜，輔助檢測潛在隱患。</h2>
            <!-- <el-button class="bannerBtn" @click="$router.push('/login')">立即注册</el-button> -->
            <el-button type = "primary" class="bannerBtn" @click="$router.push('/articleindex')">查看健康資訊</el-button>
        </div>
    </header>
</template>


<script>
export default {
    name:'HomeBanner',
    setup() {
        
    }
}
</script>



<style lang = "less" scoped>
    * {
        padding: 0;
    }
    .banner {
        position: relative;
        height: 100vh;
        margin-top: 0;
        img {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }
        .mask {
            position: absolute;
            left: 0;
            right: 0;
            height: 100vh;
            background: rgb(48, 56, 68);
            opacity: 0.5;
        }
        .content {
            width: 100%;
            position: absolute;
            box-sizing: border-box;
            padding: 240px;
            padding-top: 15%;
            font-family: 'Ubuntu';
            top: 88px;
            text-align: center;
            
            h2 {
                color: #f2f3f8;
                font-size: 20px;
                font-weight: 250;
                margin-bottom: 40px;
            }
        }
        .bannerBtn{
            margin-top: 80px;
            width: 220px;
            height: 40px;
            border-radius: 10px;
            font-size: 18px;
            padding: 0;
        }
        .el-button{
            margin:20px;
        }
    }

    @media (max-width: 2500px) { 
        .h1 {
                color: #f2f3f8;
                margin-bottom: 18px;
                font-size: 68px;
                font-weight: 500;
            }
        .banner {
            .content {
                padding: 120px;
            }
           
        }
     }

    @media (max-width: 768px) { 
        .banner {
            .content {
                padding: 60px;
            }
        }
    }
    @media (max-width: 500px) { 
        .h1 {
                color: #f2f3f8;
                margin-bottom: 18px;
                font-size: 28px;
                font-weight: 400;
            }
        .bannerImage{
                width: 100%;
            }
    }

</style>