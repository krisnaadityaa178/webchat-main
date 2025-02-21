<template>
    <transition name="fade">
        <div v-if="isVisible" class="login-overlay">
            <transition name="slide-up">
                <div v-if="isVisible" class="login-box">
                    <button class="close-button" @click="$emit('close')">×</button>

                    <div class="login-container">
                        <div class="left-side">
                            <img src="/src/assets/images/Computer login-amico.svg" alt="Illustration">
                        </div>
                        <div class="right-side">
                            <h1 class="login-title">Sign in to UMSUMate</h1>
                            <form @submit.prevent="handleSubmit">
                                <div class="input-group-1">
                                    <label for="email">NPM</label>
                                    <div class="input-wrapper">
                                        <input 
                                            type="number"
                                            id="number"
                                            v-model="NPM"
                                            required
                                        >
                                        <span class="icon">✉️</span>
                                    </div>
                                </div>

                                <div class="input-group-1">
                                    <label for="password">Password</label>
                                    <div class="input-wrapper">
                                        <input 
                                            :type="showPassword ? 'text' : 'password'"
                                            id="password"
                                            v-model="password"
                                            required
                                        >
                                        <span 
                                            class="icon-password-toggle"
                                            @click="showPassword = !showPassword"
                                        >🔒
                                        </span>
                                    </div>
                                </div> 

                                <div class="remember-forgot">
                                    <label class="remember-me">
                                        <input 
                                            type="checkbox" 
                                            v-model="rememberMe"
                                        >
                                        Remember Me
                                    </label>
                                    <a href="#" class="forgot-password" @click.prevent="openForgotPassword">
                                        Forgot Password
                                    </a>
                                </div>

                                <div class="button-container">
                                    <button type="submit" class="login-button">Sign In</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'LoginPage',
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            email: '',
            password: '',
            rememberMe: false,
            showPassword: false
        }
    },
    methods: {
        handleSubmit() {
            // Logika submit tanpa PHP, bisa diubah sesuai dengan kebutuhan backend Anda
            console.log('Email:', this.email);
            console.log('Password:', this.password);
            alert('Login berhasil (simulasi).');
        },
        openForgotPassword() {
            this.$emit('show-forgot-password')
        }
    }
};
</script>


<style>
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

    .login-overlay {
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
        padding:20px;
        }

        .login-box {
        background: rgba(0, 0%, 10%, 0.1);
        backdrop-filter: blur(1px);
        border-radius: 1rem;
        border: 2px solid var(--bg-color);
        width: 100%;
        max-width: 800px;
        max-height: 550px;
        box-shadow: 0 8px 20px rgba(41, 22, 112, 0.2);
        position: relative;
        overflow: hidden;
        }

        .login-container {
            display:flex;
            height:100%;
        }

        .left-side {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: var(--bg-color);
        }

        .left-side img {
            max-width: 80%;
            height: 280px;
            object-fit: contain;
        }

        /* Right Side Styles */
        .right-side {
            flex: 1;
            padding: 40px;
            background-color: var(--bg-color);
        }
        
        .login-title {
        color: var(--text-color);
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .input-group-1 {
            margin-bottom: 1rem;
        }
        
        .input-group label {
        display: block;
        color: #fff;
        margin-bottom: 0.5rem;
        font-weight: 500;
        }
        
        .input-wrapper {
        position: relative;
        }
        
        .input-wrapper input {
        margin-top: 1rem;
        width: 100%;
        padding: 0.8rem 1rem;
        padding-right: 2.5rem;
        background: var(--primary-color);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        color: var(--bg-color);
        font-size: 1rem;
        transition: all 0.3s ease;
        }
        
        .input-wrapper input:focus {
        outline: none;
        color: var(--text-color);
        background: var(--bg-color);
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px var(--primary-color);
        }

        
        
        .input-wrapper .icon {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        }

        .icon-password-toggle {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        }
        
        .remember-forgot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        color: var(--text-color);
        }
        
        .remember-me {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        }
        
        .forgot-password {
        color: var(--text-color);
        text-decoration: none;
        opacity: 1;
        transition: opacity 0.3s ease;
        }
        
        .forgot-password:hover {
        opacity: 1;
        color: #F93827;
        }
        
        .login-button {
        width: 100%;
        padding: 0.8rem;
        background: var(--border-color);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 10px;
        color: var(--text-color);
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        align-items: center;
        justify-content: center;
        display: flex;
        }
        
        .login-button:hover {
        background: var(--button-color-2);
        transform: translateY(-1px);
        color: var(--bg-color);
        }
        
        .register-button {
            margin-top: 10px;
            width: 100%;
            padding: 0.8rem;
            background: var(--border-color);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            color: var(--text-color);
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            align-items: center;
            justify-content: center;
            display: flex;
        }

        .register-button:hover {
            background: #4379F2;
            transform: rotateY(-1px);
            color: var(--bg-color);
        }
        .close-button {
        position: absolute;
        top: 1px;
        right: 10px;
        background: none;
        border: none;
        color: var(--warning-color);
        font-size: 2.8rem;
        cursor: pointer;
        opacity: 0.9;
        transition: all 0.3s ease;
        z-index: 10;
        }
        
        .close-button:hover {
        transition: transform 0.3s ease-in-out;
        transform: translateY(-3px);
        opacity: 2;
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
</style>