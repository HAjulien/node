<script setup>
import { ref } from 'vue'

</script>

<template>
  <table>

    <thead>
      <tr>
        <th>Marque</th><th>Couleur</th><th>Stock</th>
      </tr>
    </thead>

    <tbody id="app">
      <tr v-for-key="entrepot in entrepots">
        <td>{{ entrepot.Marque }}</td>
        <td>{{ entrepot.Couleur }}</td>
        <td>{{ entrepot.Stock }}</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td colspan="3">Délais sur commande très rapide</td>
      </tr>
    </tfoot>

  </table>
</template>

<script>

export default{
  data () {
    return {
      entrepots: 
      [ 
        { 
        "id":1,
        "Marque": "Bechstein",
        "Couleur": "Noir",
        "Stock": 7
        },
        {  
        "id":2,
        "Marque": "Blüthner",    
        "Couleur": "Ivoir",
        "Stock": 2
        },
        { 
        "id":3,
        "Marque": "Burgasser",
        "Couleur": "Blanc",
        "Stock": 5
        },
        {  
        "id":4,
        "Marque": "J.Czapka",
        "Couleur": "Noir",
        "Stock": 6
        }
    ]
    }  
  },

//   mounted () {
//     axios
//       .get('./assets/entrepots.json')
//       .then(response => (this.entrepots = response.data.entrepots))
//   }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>