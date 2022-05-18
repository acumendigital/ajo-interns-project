<template>
  <div class="main-container">
    <section class="top">
      <TheNavbar />
      <div class="welcome">
        <h1>Discover, {{ cityName }}</h1>
      </div>
    </section>
    <section class="middle">
      <div class="scroll">
        <div class="scroll-text">
          <TheScrollBar />
        </div>
      </div>
      <div class="search">
        <TheSearchBar />
      </div>
    </section>
    <section class="explore-container">
      <div class="explore-cards" v-if="discoveredPlaces">
        <TheExploreCard
          v-for="(place, index) in discoveredPlaces"
          :key="index"
          :place="place"
        />
      </div>
      <TheErrorCard v-else-if="!discoveredPlaces" :message="'Oops... Something is wrong'" />
    </section>
  </div>
</template>
<script>
import TheErrorCard from '~/components/TheErrorCard.vue'
import axios from 'axios'

export default {
  transition: 'discover',
  conponents: {
    TheErrorCard,
  },
  async fetch() {
    try {
      this.discoveredPlacesData = (
        await axios.get(
          `https://ajo-app.herokuapp.com/api/places/discover/${this.$route.params.explore}?placeType=point_of_interest`
        )
      ).data.data
    } catch (error) {
      console.log(error.message)
    }
    try {
      this.citiesData = (
        await axios.get(`https://ajo-app.herokuapp.com/api/top-cities`)
      ).data.data
    } catch (error) {
      console.log(error.message)
    }
  },
  data() {
    return {
      discoveredPlacesData: [],
      cityName: this.$route.params.explore,
      citiesData: [],
    }
  },
  computed: {
    cities() {
      return this.citiesData
    },
    discoveredPlaces() {
      return this.discoveredPlacesData
    },
  },
}
</script>
<style lang="scss" scoped>
.main-container {
  font-family: 'Cereal Black';
  .top {
    .welcome {
      margin-top: 34px;
      padding: 0rem 1.5rem;
      h1 {
        font-family: 'Cereal Medium';
        font-size: 25px;
        font-weight: 900;
        color: #041a7a;
      }
    }
  }
  .middle {
    grid-area: mid;
    .scroll {
      padding-top: 35px;
      ::-webkit-scrollbar {
        height: 0px;
        background: white;
      }
      ::-webkit-scrollbar-thumb:horizontal {
        background: #fff;
        border-radius: 10px;
      }
    }
    .search {
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
  .explore-container {
    .explore-cards {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-top: 1rem;
      overflow-y: scroll;
      overflow-x: hidden;
      max-height: 650px;
      padding: 0rem 3rem;
    }
  }
}

.discover-enter-active,
.discover-leave-active {
  transition: opacity 0.5s;
}
.discover-enter,
.discover-leave-active {
  opacity: 0;
}
</style>
