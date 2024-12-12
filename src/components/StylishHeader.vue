<template>
  <div class="stylish-header page-animation">
    <div class="header-container">
      <div class="line dot-animation"></div>
      <h1>{{ title }}</h1>
    </div>
    <hr>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'StylishHeader',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stylish-header{
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1, h2 {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 3em;
  letter-spacing: 14px;
}
h2{
  font-size: 2em;
  font-style: italic;
  letter-spacing: 10px;
}
hr{
  width: 10%;
  height: 3px;
  background-color: white;
}

.header-container{
  position: relative;
  width: fit-content;
}

.line{
  position: absolute;
  width: 70px;
  height: 70px; /* Adjust the thickness */
  border-radius: 5px;
  background-color: var(--primary) ;
  transform: rotate(-45deg);
  top: 25px;
  left:-15px;
  z-index: -1;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleAndRotate {
  0% {
    transform: scale(0) rotate(0deg);  /* Initial state */
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(315deg);  /* Final state */
    opacity: 1;
  }
}

.page-animation {
  animation: fadeInUp 1s ease-out forwards; /* 1s duration, ease-out timing */
}

.dot-animation {
  animation: scaleAndRotate 1.5s ease-out forwards; /* Animation duration and easing */
}
</style>
