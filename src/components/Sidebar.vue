-- Active: 1723022185300@@127.0.0.1@3306@data_prodi
        <template>
            <aside class="sidebar" :class="{ active: isActive }">
            <div class="sidebar-main-content">
                <!-- Logo Section -->
                <div class="logo">
                <img src="/images/LOGO-UMSU-BARU-1.webp" alt="UMSU Logo" />
                <div class="logo-text">
                    Universitas Muhammadiyah<br />
                    Sumatera Utara
                </div>
                </div>
        
                <!-- Search Box -->
                <div class="search-box">
                <input 
                    type="text" 
                    v-model="searchQuery" 
                    @keyup.enter="handleSearch"
                    placeholder="Search..." 
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="search-icon">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </div>
        
                <!-- Today Section -->
                <div class="menu-section">
                <h2>Today</h2>
                <ul>
                    <li 
                    v-for="(question, index) in todayHistory" 
                    :key="index"
                    @click="handleQuestionClick(question)"
                    class="history-item"
                    >
                    {{ question }}
                    </li>
                </ul>
                </div>
        
                <!-- Tools Section -->
                <div class="menu-section-2">
                <h2>Menu</h2>
                <ul>
                    <li @click="goToStudentPortal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16.08L12 18.72L7 16.08V12.27L12 14.9L17 12.27V16.08Z"/>
                    </svg>
                    <span>Student Portal</span>
                    </li>
                    <li @click="goToElearning">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12V14H16V12H8ZM8 16V18H13V16H8Z"/>
                    </svg>
                    <span>E-Learning</span>
                    </li>
                    <li @click="goToDocuments"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12V14H16V12H8ZM8 16V18H13V16H8Z"/>
                    </svg>
                    <span>Documents</span>
                    </li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"/>
                    </svg>
                    <span>History</span>
                    </li>
                </ul>
                </div>
        
                <!-- Settings Section -->
                <div class="menu-section-3">
                <h2>Settings & Help</h2>
                <ul>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                    </svg>
                    <span>Settings</span>
                    </li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>
                    <span>help</span>
                    </li>
                </ul>
                </div>
        
                <!-- Login Page -->
                <div class="login">
                <button class="btn-login-student" @click="$emit('show-login')">
                    Sign In
                </button>
                </div>
            </div>
        
            <!-- User Profile -->
            <div class="user-profile">
                <img 
                :src="user.image || '@/assets/images/profil-user.jpg'" 
                :alt="user.email" 
                />
                <div class="user-info">
                <div class="email">{{ user.email }}</div>
                <div class="role">{{ user.role }}</div>
                </div>
            </div>
            </aside>
        </template>
        
            <script>
            export default {
            name: 'Sidebar',
            props: {
                isActive: {
                type: Boolean,
                default: false
                },
                user: {
                type: Object,
                required: true
                },
                lastAnsweredQuestion : {
                    type: String,
                    default: ''
                }
            },
            data() {
                return {
                searchQuery: '',
                todayHistory: []
                }
            },
            watch: {
                lastAnsweredQuestion(newQuestion) {
                    if (newQuestion && !this.todayHistory.includes(newQuestion)) {
                        this.addToHistory(newQuestion);
                    }
                }
            },
            methods: {
                addToHistory(question) {
                // Cek apakah pertanyaan sudah ada di history
                if (!this.todayHistory.includes(question)) {
                    this.todayHistory.unshift(question);
                    // Batasi jumlah history
                    if (this.todayHistory.length > 3) {
                    this.todayHistory.pop();
                    }
                }
                },
                goToStudentPortal() {
                    window.open('https://mahasiswa.umsu.ac.id/Account/Login', '_blank');
                },
                goToElearning() {
                    window.open('https://elearning.umsu.ac.id/login', '_blank'); 
                },
                goToDocuments() {
                    window.open('https://fikti.umsu.ac.id/panduan-penulisan-skripsi/', '_blank');
                }
            },
            emits: ['show-login']
            }
        </script>
        
        <style scoped>
        li {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            padding: 8px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        li:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        
        svg {
            width: 20px;
            height: 20px;
        }
        

        </style>