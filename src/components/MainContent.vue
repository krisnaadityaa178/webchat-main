<template>
    <main class="main-content">
        <div class="welcome-section" :class="{ 'hide': chatHistory.length > 0 }">
            <h1>Welcome to UMSUMate</h1>
            <p>Find out anything we can help you with!</p>
        </div>
        
        <div class="chat-container">
            <div class="chat-messages" ref="chatMessages">
                <template v-for="(chat, index) in chatHistory" :key="index">
                    <!-- User Message -->
                    <div class="message user-message">
                        <div class="message-content">
                            <p>{{ chat.question }}</p>
                            <span class="message-time">{{ chat.time }}</span>
                        </div>
                    </div>
                    
                    <!-- Bot Message -->
                    <div class="message bot-message">
                        <div class="message-content" :class="{ 'loading': chat.isLoading }">
                            <p>{{ chat.response }}</p>
                            <span class="message-time">{{ chat.time }}</span>
                        </div>
                    </div>
                </template>
            </div>

            <div class="chat-input-wrapper">
                <input 
                    type="text" 
                    v-model="message"
                    @keypress.enter="sendMessage"
                    placeholder="Ask something...." 
                    class="chat-input"
                    maxlength="300"
                    :disabled="isLoading"
                >
                <span class="char-count">{{ message.length }}/300</span>
                <button class="btn-run" @click="sendMessage" :disabled="isLoading">
                    <div v-if="isLoading" class="loading-spinner"></div>
                    <div v-else class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>

        <div class="footer-text">
            <p>Fakultas Ilmu Komputer dan Teknologi Informasi</p>
            <p>All Rights Reserved@ 2025</p>
        </div>
    </main>
</template>

<script>
import { debounce } from 'lodash';

export default {
    name: 'MainContent',
    data() {
        return {
            message: '',
            chatHistory: [],
            showWelcome: true,
            isLoading: false,
            chatResponses: {
                'halo': 'Hai, saya adalah assisten yang siap membantu kamu',
                'hallo': 'Hai, saya adalah assisten yang siap membantu kamu',
                // Informasi Umum
                'jam kerja': 'Jam kerja fakultas adalah Senin-Jumat, 08.00-16.00 WIB.',
                'lokasi': 'Fakultas Ilmu Komputer berlokasi di Kampus UMSU, Jalan Kapten Muchtar Basri No. 3, Medan.',
                'kontak': 'Anda dapat menghubungi kami di nomor (061) 6619056 atau email fikti@umsu.ac.id',
                
                // Akademik
                'program studi': 'Kami memiliki 3 program studi: 1. Teknologi Informasi 2. Sistem Informasi 3. Sains Data',
                'pendaftaran': 'Pendaftaran mahasiswa baru dapat dilakukan secara online melalui website pmb.umsu.ac.id',
                'biaya kuliah': 'Biaya kuliah bervariasi tergantung program studi. Silakan hubungi bagian administrasi untuk informasi detail.',
                
                // Fasilitas
                'laboratorium': 'Kami memiliki beberapa laboratorium: Lab Komputer, Lab Jaringan, Lab Multimedia, dan Lab Riset.',
                'perpustakaan': 'Perpustakaan fakultas buka setiap hari kerja dari jam 08.00-15.00 WIB.',
                'wifi': 'Akses wifi tersedia di seluruh area fakultas untuk mahasiswa dan staff.',
                
                // Kegiatan
                'organisasi': 'Terdapat beberapa organisasi mahasiswa seperti HIMATIF (Himpunan Mahasiswa Teknolgi Informasi), HIMASI (Himpunan Mahasiswa Sistem Informasi), HIMASDA (Himpunan Mahasiswa Sains Data).',
                'seminar': 'Informasi seminar dan workshop akan diumumkan melalui website fakultas dan media sosial resmi.',
                
                // Default response
                'default': 'Maaf, saya tidak memahami pertanyaan Anda. Silakan ajukan pertanyaan yang lebih spesifik atau hubungi admin kami untuk bantuan lebih lanjut.',

                // Faq Section
                'berapa ipk saya': 'Untuk melihat IPK, silakan login ke portal mahasiswa di https://mahasiswa.umsu.ac.id',
                'bagaimana cara mengakses e-learning': 'Untuk mengakses E-Learning: \n1. Kunjungi https://elearning.umsu.ac.id \n2. Login dengan NIM dan password \n3. Pilih mata kuliah yang diinginkan',
                'kapan uas dilaksanakan': 'Jadwal UAS dapat dilihat di portal mahasiswa atau hubungi bagian akademik fakultas',
                'bagaimana cara mengisi krs': 'Panduan mengurus KRS:\n1. Login ke portal mahasiswa\n2. Pilih menu KRS\n3. Pilih mata kuliah yang tersedia\n4. Konsultasikan dengan dosen PA\n5. Submit KRS',
                'mengambil skripsi?': 'Syarat mengambil skripsi:\n1. Telah menyelesaikan minimal 138 SKS\n2. IPK minimal 2.75\n3. Tidak ada nilai E\n4. Lulus mata kuliah prasyarat',
                'nilai uas?': 'Nilai dapat dilihat di:\n1. Portal Mahasiswa (https://mahasiswa.umsu.ac.id)\n2. Menu Kartu Hasil Studi (KHS)',
            }
        }
    },
    methods: {
        sendMessage: debounce(async function() {
            if (this.message.trim() && !this.isLoading) {
                const question = this.message;
                this.message = '';
                this.isLoading = true;
                
                // Add placeholder message immediately
                const messageId = Date.now();
                this.chatHistory.push({
                    id: messageId,
                    question,
                    response: 'Thinking...',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isLoading: true
                });

                try {
                    const timeoutPromise = new Promise((_, reject) => {
                        setTimeout(() => reject(new Error('Request timeout')), 30000);
                    });

                    // Menggunakan API Flask
                    const responsePromise = this.getChatResponse(question);
                    const apiResponse = await Promise.race([responsePromise, timeoutPromise]);

                    // Update existing message
                    const messageIndex = this.chatHistory.findIndex(msg => msg.id === messageId);
                    if (messageIndex !== -1) {
                        this.chatHistory[messageIndex].response = apiResponse || this.getLocalResponse(question);
                        this.chatHistory[messageIndex].isLoading = false;
                    }
                } catch (error) {
                    console.error('Error :', error);
                    // Update with local response in case of error
                    const messageIndex = this.chatHistory.findIndex(msg => msg.id === messageId);
                    if (messageIndex !== -1) {
                        this.chatHistory[messageIndex].response = this.getLocalResponse(question);
                        this.chatHistory[messageIndex].isLoading = false;
                    }
                } finally {
                    this.isLoading = false;
                    // Scroll to bottom after update
                    this.$nextTick(() => {
                        const chatMessages = this.$refs.chatMessages;
                        if (chatMessages) {
                            chatMessages.scrollTop = chatMessages.scrollHeight;
                        }
                    });
                }
            }
        }, 300),

        // Fungsi baru untuk mengambil respons dari API Flask
        async getChatResponse(message) {
            try {
                console.log('Sending message:', message); // Debug log

                const response = await fetch('http://localhost:5000/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: message }),
                    credentials: 'same-origin'
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Network response was not ok');
                }

                const data = await response.json();
                console.log('API Response:', data); // Debug log
                
                return data.answer || this.chatResponses.default;
            } catch (error) {
                console.error('Error detail:', error);
                return this.chatResponses.default;
            }
        },

        getLocalResponse(message) {
            const lowercaseMsg = message.toLowerCase();
            
            // Check for keywords in the message
            for (const [keyword, response] of Object.entries(this.chatResponses)) {
                if (lowercaseMsg.includes(keyword)) {
                    this.$emit('question-answered', message);
                    return response;
                }
            }
            
            return this.chatResponses.default;
        },

        handleFaqQuestion(question) {
            if (question) {
                this.message = question;
                this.sendMessage();
            }
        }
    }
}
</script>

    
    <style scoped>
    .chat-messages {
        flex: 1;
        height: 400px;
        width: 100%;
        max-width: 800px;
        overflow-y: auto;
        padding: 20px;
        background: var(--bg-color);
        border-radius: 10px;
        margin-bottom: 80px;
    }
    
    .message {
        display: flex;
        margin-bottom: 15px;
        max-width: 80%;
    }
    
    .user-message {
        margin-left: auto;
        justify-content: flex-end;
    }
    
    .bot-message {
        margin-right: auto;
        justify-content: flex-start;
    }
    
    .message-content {
        display: inline-block;
        padding: 10px 15px;
        border-radius: 15px;
        position: relative;
        word-wrap: break-word;
        max-width: 100%;
        min-width: 50px;
    }
    
    .message-content p {
        margin: 0;
        white-space: pre-wrap;
    }
    
    .user-message .message-content {
        background: var(--primary-color);
        color: white;
    }
    
    .bot-message .message-content {
        background: white;
        color: #333;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .message-time {
        font-size: 0.75rem;
        color: #666;
        display: block;
        margin-top: 5px;
        text-align: right;
    }
    
    .user-message .message-time {
        color: #ccc;
    }
    
    .chat-messages::after {
        content: '';
        display: block;
        height: 20px;
    }
    
    @media screen and (max-width: 786px) {
        .message {
        max-width: 90%;
        }
    }
    </style>