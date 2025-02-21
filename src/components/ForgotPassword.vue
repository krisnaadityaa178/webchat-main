<template>
    <transition>
        <div v-if="isVisible" class="forgot-password-overlay" @click.self="$emit('close')">
            <transition name="slide-up">
                <div v-if="isVisible" class="forgot-password-box">
                    <button class="close-button" @click="$emit('close')">×</button>

                    <div class="content-wrapper">
                        <div class="form-side">
                            <div class="forgot-conteiner">
                                <h2 class="forgot-password-title">Reset Password</h2>
                                <p class="forgot-password-subtitle">Enter your email to reset your password</p>

                                <form @submit.prevent="handleSubmit">
                                    <div class="input-group">
                                        <label for="email" class="input-label">Email Address</label>
                                        <div class="input-wrapper">
                                            <input 
                                            type="email"
                                            id="email"
                                            v-model="email"
                                            class="input-field"
                                            placeholder="azellxxy@example.com"
                                            required
                                            >
                                            <span class="icon">✉️</span>
                                        </div>
                                    </div>
                                    <button type="submit" class="reset-password-button">Reset Password</button>
                                </form>
                                <div class="footer">
                                    <a href="#" class="footer-link">Don't have access anymore?</a>
                                </div>
                            </div>
                        </div>
                        <div class="illustration-side">
                            <div class="illustration-container">
                                <img src="/src/assets/images/Forgot password-bro.svg" alt="Reset Password Illustration" class="illustration">
                            </div>
                        </div>
                    </div>
                </div>
            
            </transition>
        </div>
    
    </transition>
</template>

<script>
export default {
    name: 'ForgotPassword',
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            email: ''
        }
    }, 
    methods: {
        handleSubmit() {
            console.log('Forgot password request:', {email: this.email});
            this.$emit('close');
        }
    }
}
</script>

<style scoped>

:root {
    --input-color:#F8FAFC;
    --primary-color: #291670;
    --warning-color :#F93827;
    --text-color: #333;
    --bg-color: #fff;
    --sidebar-bg: #f5f5f5;
    --hover-color: #f0f0f0;
    --border-color: #e0e0e0;
    --button-color: #06D001;
    --button-color-2 :#16C47F;
    }
.forgot-password-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;   
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.forgot-password-box {
    background: white;
    border-radius: 1rem;
    width: 85%;
    max-width: 800px;
    max-height: 500px;
    box-shadow: 0 8px 20px rgba(41, 22, 112, 0.2);
    position: relative;
    overflow: hidden;
}

.content-wrapper {
    display: flex;
    flex-direction: row;
    min-height: 500px;
}

.form-side {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.illustration-side {
    flex: 1;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.illustration-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.illustration {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.close-button {
    position: absolute;
    top: 2px;
    right: 15px;
    background: none;
    border: none;
    color: #F93827;
    font-size: 2.8rem;
    cursor: pointer;
    opacity: 0.9;
    transition: all 0.3s ease;
    z-index: 2;
}

.close-button:hover {
    transform: translateY(-3px);
    opacity: 1;
}

.forgot-password-title {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
}

.forgot-password-subtitle {
    color: #666;
    margin-bottom: 1.5rem;
    text-align: center;
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-label {
    display: block;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: 500;
    text-align: left;
}

.input-wrapper {
    position: relative;
}

.input-field {
    width: 100%;
    padding: 0.8rem 1rem;
    padding-right: 2.5rem;
    background: white;
    border: 1.5px solid #ddd;
    border-radius: 10px;
    color: var(--text-color);
    font-size: 1rem;
    transition: all 0.3s ease;
}

.input-field:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
}

.input-wrapper .icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
}

.reset-password-button {
    width: 100%;
    padding: 0.8rem;
    background: var(--border-color);
    border: none;
    border-radius: 10px;
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.reset-password-button:hover {
    background: var(--warning-color);
    transform: translateY(-1px);
    color: var(--bg-color);
}

.footer {
    margin-top: 1rem;
    text-align: center;
}

.footer-link {
    color: #666;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: #F93827;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

@media (max-width: 768px) {
    .content-wrapper {
        flex-direction: column-reverse;
    }
    
    .illustration-side {
        padding: 1rem;
        min-height: 200px;
    }
    
    .form-side {
        padding: 1.5rem;
    }
}
</style>