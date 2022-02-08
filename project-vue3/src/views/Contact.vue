<template>
    <div class="contact">
        <h1>nous contacter</h1>
        <p>pour nous contacter appeller nous ou envoyer nous un mail</p>
    </div>
    <Header/>
    <ListeContact/>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ListeContact from "@/components/ListeContact.vue";
export default {
  name: "Contact",
  components: {
     Header, ListeContact,
  },
};
</script>