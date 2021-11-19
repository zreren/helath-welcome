<template>


<el-row class="container">
  <el-col :span="8" v-for="item in dataList" :key="item" class="foodcard" @click="articleread(item.id,item.content,item.title)">
    <el-card :body-style="{ padding: '0px' }" shadow="hover" > 
    <div>
     <div class="show" >{{item.title}}</div>
    </div>
      <div  class="infobox">
        <div class="title">{{item.title}}</div>
        <div style="color: gray" class="introduce">{{item.content_introduce}}</div>
        <div class="bottom clearfix">
          
          <time class="time">发布时间:{{ item.time }}</time>
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

<el-row class="mobile1">
  <el-col :span="22" v-for="item in dataList" :key="item" class="article" @click="articleread(item.id,item.content,item.title)">
    <el-card :body-style="{ padding: '0px' }" shadow="hover" > 
    <div class="background" style="height:90px;background-color: #3080ec;">
     <div class="showm" >{{item.title}}</div>
    </div>
      <div  class="infobox">
        <!-- <div class="title">{{item.title}}</div> -->
        <div style="color: gray" class="introduce">{{item.content_introduce}}</div>
        <div class="bottom clearfix">
          
          <time class="time">发布时间:{{ item.time }}</time>
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<!-- 
<div class="am-card mobile" >
    <div class="am-card-header">带图和描述文字卡片样式</div>
    <div class="am-card-body">
        <div class="am-card-item">
            <div class="am-card-minfo">
                <div class="am-card-thumb">
                    <img src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png" />
                </div>
                <div class="am-card-content">
                    <div class="am-card-title">100元代金券</div>
                    <div class="am-card-subtitle">手工水饺</div>
                </div>
                <div class="am-list-arrow" aria-hidden="true"><span class="am-icon arrow horizontal"></span></div>
            </div>
            <div class="am-card-footnote">
                <img src="https://zos.alipayobjects.com/rmsportal/dvUDRkRqgqjDgzCNmpJj.png" />
                描述文字
            </div>
        </div>
        <div class="am-card-item">
            <div class="am-card-minfo">
                <div class="am-card-thumb">
                    <img src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png" />
                </div>
                <div class="am-card-content">
                    <div class="am-card-title">100元代金券</div>
                    <div class="am-card-subtitle">手工水饺</div>
                </div>
                <div class="am-list-arrow" aria-hidden="true"><span class="am-icon arrow horizontal"></span></div>
            </div>
            <div class="am-card-footnote">
                <img src="https://zos.alipayobjects.com/rmsportal/dvUDRkRqgqjDgzCNmpJj.png" />
                描述文字
            </div>
        </div>
    </div>
</div> -->

</template>
<style scoped>
.show{
  background-color: #3080ec;
  color: #ffffff;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bolder;
  padding: 50px;
}
.mobile .showm{
  background-color: #3080ec;
  color: #ffffff;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bolder;
}
.background{
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
}
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

  /* .image {
    width: 220px;
    height: 160px;
    display: block;
  } */

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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      margin: 5px;
  }
  .foodcard{
      margin: 20px;
      padding: 10px;
  }
  .article{
      margin: 10px;
      padding: 5px;
      width: 1px;
  }
  .infobox{
    height: 90px;
    padding: 14px;
  }
  .mobile .infobox{
    
    padding: 0px;
  }

  .title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
   
  }
  .introduce{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  }
  .mobile .introduce{
    margin: 3px;
  }
  @media (max-width:600) {
    .background{
  justify-content: center;
  display: flex;
  align-items: center;
}
  .mobile1{
    display: none;
  }
}
  
@media (max-width:400) {
    .background{
  justify-content: center;
  display: flex;
  align-items: center;
  }
  
}
@media (max-width:350) {
    .background{
  justify-content: center;
  display: flex;
  align-items: center;
  }
  
}
    
  @media (max-width:2000px) {
    .mobile1{
       display:none; 
    }
    
  }
  @media (max-width:500px){
    
.mobile1{
  display:flex
}
.container{
  display: none;
}
.showcm{
  height: 30px;

}
.infobox{
  padding: 0px;
}
.background{
  justify-content: center;
  display: flex;
  align-items: center;
  }
  }
  .mobile1 .showm{
    color: white;
  }
  .mobile1 .infobox{
    height: 60px;
  }
</style>
<script>
import bodyBottom from '../components/Explorechild/body' 
import { getExploreInfo } from '../api/Expliore'
import {onMounted, reactive, toRefs} from "vue"
import {useRoute,useRouter,onBeforeRouteUpdate} from 'vue-router'
import axios from "axios"
import '../api/card.css'

export default {
  data() {
    return {
   
   pagination: {//分页相关模型数据
                currentPage: 1,//当前页码
                pageSize:10,//每页显示的记录数
                total:0,//总记录数
                queryString:null//查询条件
                 },
    }
    
   
  },
  components: {
    bodyBottom
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
    

    axios.post("/front/articlefind.do",param).then((response)=> {
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
     const articleread = (id,content,title) => {
          router.push({
          name: 'article',
          params: {
            id: id,
            content:content,
            title:title,
          }
        })
    };
    function back(){
      router.push({path: `/articleindex`});
    }
    return {
      articleread,
       changeHash,
      ...toRefs(info),
      back
    }
  }
  
}
</script>