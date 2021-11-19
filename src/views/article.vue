<template>
<div class="divice">
<el-container class="pc">
    <el-header class="title1" id="anchor">
        <el-page-header @back="goBack" content="詳情頁面" >
        </el-page-header>
       <h1 class="title">{{title}}</h1>
    </el-header>
    <el-main class="container">
    <div class="content" v-html="content"></div>
    </el-main>
</el-container>



</div>
<el-container class="mobile">
    <el-header class="title1" id="anchor">
        <el-page-header @back="goBack" content="詳情頁面" >
        </el-page-header>
       <div class="title">{{title}}</div>
    </el-header>
    <el-main class="container">
    <div class="content" v-html="content"></div>
    </el-main>
</el-container>
</template>
<style scoped>
.title1{
 float: left;
 margin-left: 100px;
 margin-top: 40px;
}
.cont >>> img{
width:100%;
height:200px;
}

.mobile .title1{
 float: left;
  margin-left: 0px;
 margin-top: 15px;
}
.title{
margin-top:  10px;
margin-bottom: 30px;
   text-align: left; 
   font-size: 28px;
   font-weight: bolder;
}
.mobile .title{
   text-align: left; 
   font-size: 20px;
   width: 300px;
   white-space: wrap;
   font-weight: 700;
}
.content{
    text-align: left;
    margin-right: 5px;
    margin-top: 10px;
}
.mobile .content{
    width: 100%;
    text-align: left;
}
.container{
    width: 720px;
    display: flex;
    margin-left: 100px;
    align-items: center;
    justify-content: center;
}
.mobile .container{
    width: 360px;
    margin-left: 0px;
}
.mobile{
    width: 400px;

}
@media (max-width:2000px) {
    .divice{
        display: block;
    }
    .mobile{
        display: none;
    }
}
@media (max-width:500px) {
    .divice{
        display: none;
    }
    .mobile{
        display: block;
    }
}

</style>
<script>
import bodyBottom from '../components/Explorechild/body' 
import { getExploreInfo } from '../api/Expliore'
import {onMounted, reactive, toRefs} from "vue"
import {useRoute,useRouter,onBeforeRouteUpdate} from 'vue-router'
import axios from "axios"

export default({
    setup() {
    let screenWidth;
    const route = useRoute()
    const router=useRouter() 
    console.log(route.params.id); 
    console.log(route.params.content); 
    let content=route.params.content
    let title=route.params.title
    Location.href="#anchor"
    
    function goBack() {
         router.push({path: `/articleindex`});
      }
      
    return {
      content,
      title,
      goBack,
      screenWidth
    }
    },
    mounted(){
        const that = this
        window.onresize = () => {
          return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
          })()
        }
      }
     
      
    
    
   
   
    
})
</script>
