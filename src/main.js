import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.js';
import pl from './locales/pl.js';
import './styles.css';

const i18n = createI18n({
  legacy: false, // Set to false for Composition API
  locale: 'pl', // Default language
  fallbackLocale: 'en', // Fallback language
  messages: {
    pl,
    en,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
