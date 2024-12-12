<template>
    <a :href="href" :class="buttonClass" @mouseover="hover = true" @mouseleave="hover = false">
      <slot></slot>
    </a>
  </template>
  
  <script>
  export default {
    name: 'ButtonLink',
    props: {
      href: {
        type: String,
        required: true
      },
      buttonClass: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        hover: false
      };
    }
  };
  </script>
  
  <style scoped>
  a {
    display: inline-block;
    background-color: var(--primary);
    padding: 1em;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s;
    text-decoration: none;
    color: white;
  }
  
  a:hover {
    border-radius: 15px;
    background-color: var(--secondary);
    transition: 0.5s;
  }
  </style>