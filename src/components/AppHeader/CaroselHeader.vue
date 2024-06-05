<script>

export default {
    name: 'Carousel',
    data() {
        return {
            slides: [
                {
                    image: 'Group-36-2x.png',
                    title: 'Web Are a Web Design Agency',

                },
                {
                    image: 'Group-35-2x.png',
                    title: 'Focus on Your Business',

                },
                {
                    image: 'Group-40-2x.png',
                    title: 'A Group of Expert Planners',

                }
            ]
        }
    },

    computed: {
        carouselStyle() {
            return {
                transform: `translateX(-${this.currentIndex * 100}%)`,
            };
        },
    },
    methods: {
        nextSlide() {
            this.currentIndex =
                (this.currentIndex + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },

        getImg(path) {
            let risultato = new URL("../../assets/photo/" + path, import.meta.url);
            return risultato.href;
        },
    },
    
};



</script>













<template>
  <div class="carousel-container">
        <button class="carousel-button left" @click="prevSlide">&#10094;</button>
        <div class="carousel">
            <div class="carousel-slides" :style="carouselStyle">
                <div class="carousel-slide" v-for="slide in slides">
                    <img :src="getImg (slide.image)" :alt="slide.text" class="carousel-image" />
                    <div class="carousel-text">{{ slide.title }}</div>
                </div>
            </div>
        </div>
        <button class="carousel-button right" @click="nextSlide">&#10095;</button>
    </div>




</template>



<style scoped>
.carousel-container {
  position: relative;
  width: 300px;
  margin: 0 auto;
}

.carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-image {
  width: 100%;
  height: auto;
}

.carousel-text {
  text-align: center;
  margin-top: 8px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
  z-index: 10;
}

.carousel-button.left {
  left: 0;
}

.carousel-button.right {
  right: 0;
}
</style>