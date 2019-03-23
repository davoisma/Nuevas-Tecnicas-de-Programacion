const contenedor= new Vue({
   el:'#contenedor',
   data: {
      titulo:'Lista',
      inombre: '',

      datos:[
        {nombre:'Alexa',edad:24},
        {nombre:'Ana',edad:23},
        {nombre:'Luis',edad:26},
        {nombre:'Pedro',edad:17}
      ],
    
   },
   methods:{
     agregardatos(){
       this.datos.push({
         nombre:this.inombre,
         edad:17
       })
     }
   }
})
