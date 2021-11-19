<template>
<!-- description 1 -->
<div class="detail">

    <el-row >
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class = "text">
            <h1>健康食譜</h1>
            <h5>
                提供一些健康食譜提供您參考
            </h5>
             <h5>
                为您的疑問提供专业性的建议。
            </h5>
        </div>
    </el-col>
     <el-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
        <div class = "pic" >
           <img class="detailImage" src="../../assets/image/unnamed.png" alt="detailImage">
        </div>
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>

    <!-- description2 -->
    <el-row >
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class = "text2">
            <h1>健康資訊</h1>
            <h5>給您一些最新的健康資訊，提高健康水平
            </h5>
            <h5>分享我們的知識
            </h5>
        </div>
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12" class = "pic2">
           <img class="detailImage2" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/e581f230d5991e52_1630055128420.png" alt="detailImage">
    </el-col>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>

   
</div>
<div class="mobiledetail">
 <div class = "text">
            <h1>健康食譜</h1>
            <h5>
                提供一些健康食譜提供您參考
            </h5>
             <h5>
                为您的疑問提供专业性的建议。
            </h5>
            
        </div>
        <div class = "text2">
            <h1>健康資訊</h1>
            <h5>給您一些最新的健康資訊，提高健康水平
            </h5>
            <h5>分享我們的知識
            </h5>
        </div>
</div>

    <footer>
        @created by 華醫科大
    </footer>
</template>

<script>
export default {
    name:'HomeDetail',
    setup() {

    }
}
</script>

<style lang="less" scoped>
/* .navcontainer{
    display: flex;
    justify-content: center;
}
 .navbox{
     display: flex;
     justify-content: center;
     align-content: center;
    //  margin: 60px;
     align-items: center;
     width: 300px;
     height: 440px;
     background-color: #EAEFF6;
 } */
 .mobiledetail{
    //  justify-content: flex-start;
     align-items: center;
     flex-direction: column;
     margin: 10px;
     
 }
.detail{
    background-color: #fafcff;
    padding: 100px 0 50px 0;
}
.el-row {
    margin-bottom: 140px;
    padding:0 180px;
    .el-row{
        margin: 0;
    }
  }
 
 .pic{
     height: 300px;
    //  background-color: #EAEFF6;
     
 }
.pic2{
    float:left;
}
 .detailImage{
         height:300px;
         float:right;
     }

.detailImage2{
     height: 300px;
     float:right;
 }
 .text{
     text-align: left;
     margin-bottom: 40px;
     margin-right:40px
 }
 .text2{
     text-align: left;
     margin-bottom: 40px;
 }
h1{
    font-weight:300 ;
    font-size: 36px;
    color:#52575f
}
h5{
    font-weight: lighter;
    // width: 380px;
    margin-top: 10px;
    font-size: 20px;
}
footer{
    color: #c9d0da;
    padding: 20px 0;
}
@media (max-width:2500px) {
    .mobiledetail{
        display: none;

    }

    
}
@media (max-width:1300px) {
    .mobiledetail{
        display: none;

    }

    
}
@media (max-width:1000px) {
    .detail{
        display: none;
    }
    .mobiledetail{
        display: flex;

        h1{
            font-size: 25px;
        }
        h5{
            font-size: 15px;
        }

    }
    

    
}
@media (max-width: 500px) { 
        h1{
            font-size: 20px;
            color: black;
        }
        h5{
           font-size: 4px; 
           margin: 0px;
        }
        .detailImage{
            display: none;
        }
        .detailImage2{
            display: none;
        }
        .detail{
            display: none;
        }
         .mobiledetail{
            display: flex;
            margin: 30px;
            
        }
    .mobiledetail h1{
        font-size: 20px;

    }
    .mobiledetail h5{
        font-size: 15px;
    }
    }
   

</style>