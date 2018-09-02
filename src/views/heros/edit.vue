<template>
  <div>
         <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtname">姓名</label>
            <input v-model.trim="formdata.name" type="txt" class="form-control" id="txtname" >
          </div>
          <div class="form-group">
            <label for="txtgender">性别</label>
            <input v-model.trim="formdata.gender" type="txt" class="form-control" id="txtgender">
          </div>
          <button @click.prevent="handleedit" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    props:['id'],
    data(){
       return{
           formdata:{
               name:'',
               gender:''
           }
       }
    },
   mounted() {
       this.loaddata();
   },
   methods:{
       loaddata(){
            this.$axios
            .get('heroes/'+this.id)
            .then((response)=>{
                this.formdata = response.data
            })
            .catch((err)=>{
                console.log(err);   
            })
       },
       handleedit(){
           this.$axios
                .put('heroes/'+this.id,this.formdata)
                .then((response)=>{
                    if(response.status==200){
                        this.$router.push('/heros')
                    }else{
                        console.log(err);  
                    }
                })
                .catch((err)=>{
                        console.log(err);  
                })
       }
      
   }
}
</script>

<style>

</style>
