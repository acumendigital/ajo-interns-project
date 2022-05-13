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
        <div
          class="scroll-text"
          v-for="(popCity, index) in cities"
          :key="popCity.id"
        >
          <TheScrollBar :popCity="popCity" :index="index" />
          <div class="line"></div>
        </div>
      </div>
      <div class="search">
        <TheSearchBar />
      </div>
    </section>
    <section class="explore-container">
      <div class="explore-cards" v-if="discoveredPlaces">
        <TheExploreCard v-for="(place, index) in discoveredPlaces" :key="index" :place="place" />
      </div>
      <TheErrorCard v-else :message="'Oops... Something is wrong'" />
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import TheErrorCard from '~/components/TheErrorCard.vue'

export default {
  transition: 'discover',
  conponents: {
    TheErrorCard,
  },
  data() {
    return {
      discoveredPlaces: this.$store.state.cityDetails.data,
      cityName: this.$route.params.explore,
    };
  },
  computed: {
    ...mapState({
      cities: (state) => state.cities,
      popularPlaces: (state) => state.popularPlaces,
    }),
    // discoveredPlaces(){
    //   return this.$store.state.cityDetails
    // }
  },
  methods: {
    ...mapActions(['getPopularPlaces', 'getTopCities', 'discoverCity']),
  },
  async fetch({ store, params }) {
    await store.dispatch('getTopCities')
    await store.dispatch('discoverCity', params.explore.toLowerCase())
  },
}
</script>
<style lang="scss" scoped>
<<<<<<< HEAD
.container {
  max-width: 428px;
  font-family: 'Brown';
  .top {
    .welcome {
      font-family: 'Brown';
      margin-top: 34px;
      padding: 0rem 2rem;
      h1 {
        font-size: 25px;
        font-weight: 900;
        color: #041a7a;
        cursor: pointer;
      }
    }
  }
  .middle {
    grid-area: mid;
    ::-webkit-scrollbar {
      height: 0px;
      width: 0px;
      background: white;
    }
    ::-webkit-scrollbar-thumb:horizontal {
      background: #fff;
      border-radius: 10px;
    }
    .scroll {
      position: relative;
      margin-top: 27px;
      display: flex;
      flex-direction: row;
      overflow: scroll;
      max-width: 428px;
      padding-bottom: 16px;

      .line {
        height: 2px;
        background: #fffee6;
        max-width: 428px;
=======
@media screen and (max-width: 428px) {
  .main-container {
    max-width: 428px;
    font-family: 'AirbnbCereal_W_md';
    .top {
      .welcome {
        font-family: 'AirbnbCereal_W_lg';
        margin-top: 34px;
        padding: 0rem 2rem;
        h1 {
          font-size: 25px;
          font-weight: 900;
          color: #041a7a;
        }
      }
    }
    .middle {
      grid-area: mid;
      ::-webkit-scrollbar {
        height: 0px;
        width: 0px;
        background: white;
      }
      ::-webkit-scrollbar-thumb:horizontal {
        background: #fff;
        border-radius: 10px;
      }
      .scroll {
        position: relative;
        margin-top: 27px;
        display: flex;
        flex-direction: row;
        overflow: scroll;
        max-width: 428px;
        padding-bottom: 16px;
        .line {
          height: 2px;
          background: #fffee6;
          max-width: 428px;
        }
      }
      .search {
        margin-top: 16px;
        margin-bottom: 24px;
>>>>>>> eb30d9d5f963de1b8509734aa28b093e2055442c
      }
    }
    .search {
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
  .explore-container {
    .explore-cards {
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
