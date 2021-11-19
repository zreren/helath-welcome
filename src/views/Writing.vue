<template>
  <div>
    <div style="margin:35px"></div>
    <img src="https://www.hwai.edu.tw/var/file/0/1000/randimg/mobileadv_3_6221661_85712.jpg">
    <h1>由中華醫事科技大學提供技術支持及內容維護。</h1>
    <footer>
    中華醫事科技大學 版權所有  本校隱私權政策 / 資訊安全政策
地址：717302台南市仁德區文華一街89號 | 總機：06-2674567 | 校園安全緊急聯絡電話：06-2903545
    </footer>
  </div>
</template>

<script>
import bodyBottom from '../components/Explorechild/body' 
import { getExploreInfo } from '../api/Expliore'
import {onMounted, reactive, toRefs} from "vue"
import {useRoute,useRouter,onBeforeRouteUpdate} from 'vue-router'
import axios from "axios"

export default {  
  data () {
    return {
     
    }
  },
  components: {
  },
  setup(){
   
   
  let infoData = reactive({
      author:"",
      title:"",
      content:"",//标题内容
      content_introduce:"",
      time:"",//文章html
    })
    
    onMounted(()=>{
      
    });

    function back(){
      router.push({path: `/articleindex`});
    }
    
    return{
      back,
    }
  }
  
}
</script>

<style scoped lang="less">
footer{
    color: #c9d0da;
    padding: 20px 0;
}
.container{
    width: 80%;
    margin: 2vh auto;
    text-align: left;
    .input{
      display: flex;
      flex-wrap: wrap;
      justify-content:center;
        .title{
        display: flex;
        margin: 10px;
        padding: 10px;
        el-input{
          display: block;
          padding: 8px;
        }
    }
    }
  
}
 @media (max-width: 500px) { 
        img{
          width: 360px;
        }
    }
</style>