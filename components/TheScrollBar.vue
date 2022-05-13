<template lang="">
  <div class="container">
    <div class="scroll-container">
      <div
        class="scroll-text"
        v-for="(popCity, index) in cities"
        :key="popCity.id"
      >
        <a :class="{ yellow: showYellow }" :href="`/${popCity.city}`">
          <p @mouseover="setYellow" @mouseleave="hideYellow">
            {{ popCity.city }}
          </p>
        </a>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      showYellow: false,
    }
  },
  computed: {
    ...mapState({
      cities: (state) => state.cities,
      popularPlaces: (state) => state.popularPlaces,
    }),
  },
  methods: {
    setYellow() {
      this.showYellow = !this.showYellow
    },
    hideYellow() {
      this.showYellow = !this.showYellow
    },
  },
}
</script>
<style lang="scss" scoped>
.scroll-container {
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 65px;
  overflow: hidden;
  overflow-x: scroll;
  padding: 0rem 0.5rem;
  ::-webkit-scrollbar {
    height: 0px;
    width: 0px;
    background: white;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: #fff;
    border-radius: 10px;
  }
  .scroll-text {
    display: flex;
    gap: 60px;
    padding: 0rem 0.5rem;
    width: max-content;

    a {
      text-decoration: none;
      p {
        font-family: 'AirbnbCereal_W_Lt';
        color: #1d405a;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
        width: 140px;
      }
    }
    .yellow:after {
      content: '';
      position: absolute;
      height: 2px;
      width: 60px;
      bottom: 0;
      background: #fcf300;
    }
  }
}
.line {
  margin-top: 10px;
  height: 22px;
  background: #000;
  max-width: 428px;
}
</style>

.scroll { position: relative; display: flex; flex-direction: row; overflow:
scroll; max-width: 1000px; padding-top: 65px; .line { margin-top: 10px; height:
2px; background: #fffee6; max-width: 428px; } }
