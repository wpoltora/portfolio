<template>
    <carousel :items-to-show="1" height="400px" :mouseDrag="false">
        <slide v-for="(photo, index) in selectedPhotos" :key="index">
            <img :src="require(`@/assets/${photo}`)" alt="photo" />
        </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>
  
  <script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  export default {
    name: 'CustomCarousel',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        photoList: {
            type: String, // Expecting a string to select the photo list
            required: true,
        },
    },
    computed: {
    selectedPhotos() {
      switch (this.photoList) {
        case 'siok':
          return [
            'siok1.jpg',
            'siok2.jpg',
            'siok3.jpg',
            'siok4.jpg'
          ]
        case 'stella':
          return [
            'stella1.jpg',
          ]
        default:
          return [] // Return an empty array if no match
      }
    },
  },
  }
  </script>

  <style scoped>
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .carousel *{
        color: white;
    }
  </style>
  