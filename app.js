const data = {
    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },
    
}

const app = new Vue({
    el: "#root",
    data: {
        contacts: [
            {
              name: 'Michele',
              avatar: '_1',
            },
            {
              name: 'Fabio',
              avatar: '_2',
            },
            {
              name: 'Samuele',
              avatar: '_3',
            },
            {
              name: 'Luisa',
              avatar: '_4',
            },
          ]
    }
})


  
console.log("vue",Vue);