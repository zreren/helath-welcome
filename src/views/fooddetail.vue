<template>
<el-container>
    <el-header class="title1" id="anchor">
        <el-page-header @back="goBack" content="食譜詳情" >
        </el-page-header>
       <h1 class="title">{{title}}</h1>
    </el-header>
    <el-main class="container">
    
    <img :src="imgurl" class="image" />
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
.title{
margin-top:  10px;
margin-bottom: 30px;
   text-align: left; 
   font-size: 28px;
   
   font-weight: bolder;
}
.content{
    text-align: left;
}
.container{
    width: 720px;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    align-items: flex-start;
    justify-content: left;
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
    
    const route = useRoute()
    const router=useRouter() 
    console.log(route.params.id); 
    console.log(route.params.content); 
    let id = route.params.id
    let content=route.params.content
    let imgurl=route.params.imgurl
    let title=route.params.title
    console.log(route.params.imgurl); 
    Location.href="#anchor"
    
    function goBack() {
         router.push({path: `/food`});
      }
    return {
        imgurl,
      content,
      title,
      goBack
    }
    },
     
      
    
    
   
   
    
})
</script>
