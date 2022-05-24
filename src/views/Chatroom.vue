<template>
    
  <div class="container">
    <Navbar @loggedOut="loggedOut"/>
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup(props, context){
      const { user } = getUser()
      const router = useRouter()
      const loggedOut = () => {
        router.push({ name: 'Welcome'})
      }
      return { loggedOut }
    }
}
</script>


<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>