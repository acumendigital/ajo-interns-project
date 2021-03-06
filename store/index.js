import VuexPersistence from 'vuex-persist'
import axios from 'axios'

function getPlugins() {
  const plugins = []

  if (process.browser) {
    const vuexLocal = new VuexPersistence({
      storage: window.localStorage,
    })

    plugins.push(vuexLocal.plugin)
  }
  return plugins
}

export const plugins = getPlugins()

export const state = () => ({
  places: [],
  reviews: [],
  user: [],
  placeDetail: [],
  userDetails: [],
  images: [],
  similarPlaces: [],
  cityDetails: [],
})

export const mutations = {
  setPlaces(state, placesData) {
    this.state.places = placesData
  },
  setPopPlaces(state, popularPlacesData) {
    this.state.popularPlaces = popularPlacesData
  },
  addReviews(state, reviews) {
    state.reviews = reviews
  },
  addUser(state, user) {
    state.user = user
  },
  addPlaceDetails(state, placeDetail) {
    state.placeDetail = placeDetail
  },
  addSimilarPlaces(state, similarPlaces) {
    state.similarPlaces = similarPlaces
  },
  setUserDetails(state, userDetails) {
    state.userDetails = userDetails
  },
  addCityDetails(state, cityDetails) {
    let cityDetailsData = { data: cityDetails }
    state.cityDetails = cityDetailsData
  },
}

export const actions = {
  async getReviews({ commit }) {
    try {
      const reviews = await axios.get(
        'https://ajo-app.herokuapp.com/api/app/reviews'
      )
      commit('addReviews', reviews.data)
    } catch (error) {
      console.log(error.message)
    }
  },
  async getPlaceDetails({ commit }, placeId) {
    try {
      const placeDetail = await this.$axios.get(`/places/${placeId}`)
      commit('addPlaceDetails', placeDetail.data.data)
    } catch (error) {
      console.log(error.message)
    }
  },
  async getSimilarPlaces({ commit }) {
    try {
      const similarPlaces = await this.$axios.get(
        `/places/search/similar?placeType=point_of_interest`
      )
      commit('addSimilarPlaces', similarPlaces.data.data)
    } catch (error) {
      console.log(error.message)
    }
  },
  async discoverCity({ commit }, city) {
    try {
      const discoveries = await this.$axios.get(
        `places/discover/${city}?placeType=point_of_interest`
      )
      commit('addCityDetails', discoveries.data.data)
    } catch (error) {
      console.log(error.message)
    }
  },
}

export const getters = {
  async getPlaceReviews(state) {
    return await state.placeDetail.reviews
  },
}
