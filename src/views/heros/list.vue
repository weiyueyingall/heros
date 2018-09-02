<template>
    <div>
         <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link class="btn btn-success" to="/heros/add">Add</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>性别</th>            
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list" :key="item.id">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <!-- <a href="edit.html">edit</a> -->
                  <router-link :to="'/heros/edit/'+item.id">edit</router-link>
                  &nbsp;&nbsp;
                  <a href="javascript:;" @click.prevent="handle(item.id)">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
// import axios from '../../../../node_modules/axios/dist/axios.js';
export default {
  data(){
    return {
       list:[]
    }
   
  },
  mounted() {
    this.loadData()
  },
  methods:{
    loadData(){
      this.$axios
          .get('heroes')
          .then((response)=>{
            this.list = response.data;
          })
          .catch((err)=>{
            console.log(err); 
          })
    },
    handle(id){
      if(confirm('确定要删除吗')){
      this.$axios
          .delete('heroes/'+id)
          .then((response)=>{
            if(response.status==200){
              alert('删除成功');
                this.$router.push('/heros');
            }else{
              alert('删除失败');
            }
          })
          .catch((err)=>{
            console.log(err);
          })
      }
     
    }
  }
}
</script>

<style>

</style>


