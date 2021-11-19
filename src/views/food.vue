<template>
<el-row class="container">
  <el-col :span="4" v-for="item in dataList" :key="item" class="foodcard" @click="articleread(item.id,item.content,item.imgurl)" >
    <el-card :body-style="{ padding: '0px' }" shadow="hover"> 
      <img :src="item.imgurl" class="image" />
      <div style="padding: 14px;" class="infobox">
        <div class="titlefood">{{item.title}}</div>
        <div class="bottom clearfix">
          <!-- <time class="time">{{ currentDate }}</time> -->
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

<el-row class="mobile">
  <el-col :span="16" v-for="item in dataList" :key="item" class="foodcard" @click="articleread(item.id,item.content,item.imgurl)" >
    <el-card :body-style="{ padding: '0px' }" shadow="hover"> 
      <img :src="item.imgurl" class="image" />
      <div style="padding: 14px;" class="infobox">
        <div class="title">{{item.title}}</div>
        <div class="bottom clearfix">
          <!-- <time class="time">{{ currentDate }}</time> -->
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 220px;
    height: 160px;
    display: block;
  }
  .mobile .image{
    width: 280px;
    height: 160px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .container{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
      margin: 20px;
  }
  .mobile{
      display: flex;
      justify-content: center;
      align-items: center;
      
  }
  .foodcard{
      margin: 20px;
      padding: 10px;
  }
  .mobile .foodcard{
    margin: 10px;
    padding: 5px;
  }
  .infobox{
    height: 70px;
  }
  .mobile .infobox{
    height: 40px;
  }
  .titlefood{
    overflow: hidden;
      white-space: nowrap;
  text-overflow: ellipsis;
  }

  @media (max-width:2000px) {
    .mobile{
      display: none;
    }
    
  }
  @media (max-width:500px) {
    .mobile{
      display: flex;
    }
    .container{
      display: none;
    }
    
  }
</style>

<script>
import bodyBottom from '../components/Explorechild/body' 
import { getExploreInfo } from '../api/Expliore'
import {onMounted, reactive, toRefs} from "vue"
import {useRoute,useRouter,onBeforeRouteUpdate} from 'vue-router'
import axios from "axios"

export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
    setup(){
    const param = {
                    currentPage:1,//页码
                    pageSize:10,//每页显示的记录数
                };
    const route = useRoute()
    const router=useRouter()
    const info = reactive({
      dataList: [],  
      author:"",
      title:"",
      content:"",//标题内容
      c_type:"",//文章类型
      pic_type:"",//图表类型
      img_url:"",//封面链接
      content_main:"",//文章html
      creatTime:"",
      collect:0,
      catalog:[]
    })
    //  目录点击事件
      const changeHash=(idName)=>{
      //   console.log(idName);
      //   console.log( document.querySelector());
        document.querySelector(`[id='${idName}']`).scrollIntoView(true);
     }

    onMounted(()=>{
    
    axios.post("/front/foodfindPage.do",param).then((response)=> {
                    //为模型数据赋值，基于VUE的双向绑定展示到页面
                 info.dataList = response.data.rows;
                 console.log(info.dataList)
                });
    })
    onBeforeRouteUpdate( (to, from) => {
        console.log(from.path);
        getExploreInfo({'id':to.params.id}).then(res=>{
          document.getElementById('main').innerHTML=res.result[0].content_main
          console.log(res.result)
         info.author=res.result[0].autho
         info.title=res.result[0].title
         info.content=res.result[0].content
         info.c_type=res.result[0].c_type
         info.pic_type=res.result[0].pic_type
         info.creatTime=res.result[0].updatedAt
         info.collect=res.result[0].collect
         info.collect=res.result[0].collect
         info.catalog=res.result[0].tagArr
        });
        document.getElementsByClassName("container")[0].scrollIntoView(true);
        
    })
    const articleread = (id,content,imgurl) => {
          router.push({
          name: 'fooddetail',
          params: {
            id: id,
            content:content,
            imgurl:imgurl,
          }
        })
    };
    function back(){
      router.push({path: `/articleindex`});
    }
    return {
       changeHash,
      ...toRefs(info),
      back,
      articleread
    }
}}
</script>