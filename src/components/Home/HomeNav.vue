 <template>
 <span class="title">我們提供一下的檢測項目以及相關的改善建議</span>
<div class="container">
    <!-- 肌少 -->
    <div class="cycle"> 
        <img class="icon" style="color:black;" src="../../assets/image/muscle.png" />
        <span>肌少症</span>
    </div>
    <!-- 失智 -->
    
    <div class="cycle"> 
        <img class="icon"  src="../../assets/image/zhihui1.png" />
        <span>失智症</span>
    </div>
    
    
    <div class="cycle"> 
          <img class="icon"  src="../../assets/image/gutou2.png" />
          <span>骨質疏鬆</span>
    </div>
    
    <div class="cycle"> 
          <img class="icon"  src="../../assets/image/old.png" />
          <span>衰弱症</span>
    </div>
    
    <div class="cycle"> 
          <img class="icon"  src="../../assets/image/yingyangcan.png" />
          <span>營養失調</span>
    </div>
    

</div>
<div class="mobile">
    <!-- 肌少 -->
    <div class="mobilec">
    <div class="cycle"> 
        <img class="icon" style="color:black;" src="../../assets/image/muscle.png" />
        <span>肌少症</span>
    </div>
    <!-- 失智 -->
    
    <div class="cycle"> 
        <img class="icon"  src="../../assets/image/zhihui1.png" />
        <span>失智症</span>
    </div>
    
    
    <div class="cycle"> 
          <img class="icon"  src="../../assets/image/gutou2.png" />
          <span>骨質疏鬆</span>
    </div>
    
    <div class="cycle"> 
          <img class="icon"  src="../../assets/image/old.png" />
          <span>衰弱症</span>
    </div>
    
    <div class="cycle"> 
          <img class="icon"  src="../../assets/image/yingyangcan.png" />
          <span>營養失調</span>
    </div>
    
    </div>
</div>
</template>

<script>
export default {
    name:'HomeNav',
    setup() {
        return {
        
        }
    }
}
</script>

<style lang="less" scoped>
.cycle{
    margin: 50px;
       background-color: #4FBECB;
       width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
   }
img{
    width: 50%;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
   margin-bottom: 50px;
 
    
}
span{
    color: white;
    font-size: 20px;
   
}
.title{
    color: #4FBECB;
    margin-top: 100px;
    font-size: 30px;
    display: block;
}
.mobilec{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
@media (max-width:2500px) {
    .mobile{
        display: none;

    }
    .container{
        display: flex;
    }
    
}
@media (max-width:1000px) {
    .mobile{
        display: block;
    }
     .container{
        display: none;

    }
    
}
@media (max-width:500px){
    .mobile{
        display: block;

    }
    .container{
        display: none;

    }
}
</style>