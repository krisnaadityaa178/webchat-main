<template>
  <aside class="faq-section">
  <h2>Frequently Asked (6)</h2>
  <div 
  v-for="(faq, index) in faqs" 
  :key="index" 
  class="faq-item" 
  @click="handleFaqClick(faq.question)"
  >
      <h3>{{ faq.question }}</h3>
  </div>
  </aside>
</template>

<script>
export default {
  name: 'FaqSection',
  emits: ['ask-question'],
  data() {
  return {
    faqs: [
      { 
        question: 'Berapa IPK saya?'
      },
        {
          question: 'Bagaimana cara Mengakses E-Learning?'
        },
        {
          question: 'Kapan UAS dilaksanakan?'
        },
        {
          question: 'Bagaimana cara mengisi KRS?'
        },
        {
          question: 'Apa saja syarat untuk mengambil skripsi?'
        },
        {
          question: 'Bagaimana cara mengatahui nilai UAS?'
        }
    ]
  }
  },
  methods: {
    handleFaqClick(question) {
      console.log('FAQ clicked: ', question);
      this.$emit('ask-question', question);
    }
  },
  mounted() {
    console.log('FaqSection mounted');
  }
}
</script>

<style scoped>
:root {
  --primary-color: #291670;
  --warning-color :#F93827;
  --text-color: #333;
  --bg-color: #fff;
  --sidebar-bg: #f5f5f5;
  --hover-color: #f0f0f0;
  --hover-color-2:#EEEDEB;
  --border-color: #e0e0e0;
  --button-color: #06D001;
  --button-color-2 :#16C47F;
}
  /* Components/FaqSection.vue */
.faq-section {
  cursor: pointer;
  grid-column: 3;
  padding: 20px;
  border-left: 1px solid var(--border-color);
  background-color: var(--sidebar-bg);
}

.faq-section h2 {
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.faq-item {
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: var(--border-color);
  transition: all 0.3 ease;
}

.faq-item:hover {
  background-color: var(--button-color-2);
  transform: translateY(-2px);
}

.faq-item h3 {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: var(--primary-color);
  transition: all 0.3 ease;
}

.faq-item h3:hover {
  color: var(--bg-color);
}
</style>