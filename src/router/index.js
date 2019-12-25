import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import html from '@/pages/home/com/html-info'
import css from '@/pages/home/com/css-info'
import js from '@/pages/home/com/js-info'
import vue from '@/pages/home/com/vue-info'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/html',
            name: 'html',
            component: html
        },
        {
            path: '/css',
            name: 'css',
            component: css
        },
        {
            path: '/js',
            name: 'js',
            component: js
        },
        {
            path: '/vue',
            name: 'vue',
            component: vue
        }
  ]
})
