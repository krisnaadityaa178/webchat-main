<template>
  <div class="container">
    <Sidebar 
      :isActive="sidebarActive"
      :user="user"
      :lastAnsweredQuestion="lastAnsweredQuestion"
      @show-login="showLoginPopup = true"
    />
    
    <button class="toggle-sidebar" @click="toggleSidebar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>

    <MainContent 
    ref="MainContent"
    @question-answered="handleQuestionAnswered"
    />
    <FaqSection @ask-question="handleFaqQuestion"
    />
    <LoginPage 
      :isVisible="showLoginPopup"
      @close="showLoginPopup = false"
      @show-forgot-password="openForgotPassword"
      @login-success="handleLoginSuccess"
    />
    <ForgotPassword
      :isVisible="showForgotPasswordPopup"
      @close="closeForgotPassword"
    />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
import FaqSection from './components/FaqSection.vue'
import LoginPage from './components/LoginPage.vue'
import ForgotPassword from './components/ForgotPassword.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    MainContent,
    FaqSection,
    LoginPage,
    ForgotPassword
  },
  data() {
    return {
      sidebarActive: false,
      showLoginPopup: false,
      showForgotPasswordPopup: false,
      user: {
        email: '',
        role: '',
        image: ''
      },
      lastAnsweredQuestion: ''
    }
  },
  methods: {
    handleFaqQuestion(question) {
      if(this.$refs.MainContent && this.$refs.MainContent.handleFaqQuestion) {
        this.$refs.MainContent.handleFaqQuestion(question);
      }
    },
    handleQuestionAnswered(question) {
      this.lastAnsweredQuestion = question;
    },
    toggleSidebar() {
      this.sidebarActive = !this.sidebarActive;
    },
    openForgotPassword() {
      // Close login popup first
      this.showLoginPopup = false;
      // Then open forgot password popup
      this.showForgotPasswordPopup = true;
    },
    closeForgotPassword() {
      this.showForgotPasswordPopup = false;
    },
    handleLoginSuccess() {
      this.user = {
        email: userData.email,
        role: 'Mahasiswa',
        image: ''
      }
    }
  }
}
</script>

<style>

</style>