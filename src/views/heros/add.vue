<template>
    <div>
         <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtname">姓名</label>
            <input v-model.trim="formdata.name" type="txt" class="form-control" id="txtname" >
          </div>
          <div class="form-group">
            <label for="txtgender">性别</label>
            <input v-model.trim="formdata.gender" type="txt" class="form-control" id="txtgender">
          </div>
          <button @click.prevent="handleadd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
// import axios from '../../../../node_modules/axios/dist/axios.js';
export default {
data(){
    return{
        formdata:{
            name:'',
            gender:''
        }
    }
},
methods:{
    handleadd(){
        this.$axios
            .post('heroes',this.formdata)
            .then((response)=>{
                if(response.status==201){
                    this.$router.push('/heros');
                }
            }).catch((err)=>{
                console.log(err);
                
            })
    }
}
}
</script>

<style>

</style>
