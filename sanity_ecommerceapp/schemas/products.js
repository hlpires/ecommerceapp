export default {
    name:'produtos',
    title:'Produtos',
    type:'document',
    fields:[
        {
        name:'imagem',
        title:'Imagem',
        type: 'array',
        of:  [{type:'image'}],
        options: {
              hotspot:true
          }
        },

        {
        name:'nome',
        title:'Nome',
        type: 'string',            

        },

        {

        name:'slug',
        title:'Slug',
        type: 'slug',  
        options:{
            source:'name',
            maxLength:90,
        }
        },
        
        {
        name: 'preco',
        title:'Preco',
        type:'number',

        },
        {
            name: 'detalhes',
            title:'Detalhes',
            type:'string',
    
        }







    ]
}