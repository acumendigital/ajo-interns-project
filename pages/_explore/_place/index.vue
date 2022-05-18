<template>
  <div class="booking-container">
    <TheNavbar />
    <div class="img-container">
      <carousel :photos="placeDetailData.photos" />
    </div>
    <div class="place-description-container">
      <div class="place-description">
        <div class="place-name">
          <h2>
            {{ placeDetails.name }}
          </h2>
          <p>
            {{ placeDetails.business_status }}
          </p>
        </div>
        <div class="place-rating">
          <p>
            {{ placeDetails.rating }}
          </p>
          <img src="~/assets/images/star.svg" alt="star" />
        </div>
      </div>
    </div>
    <div class="place-info-container">
      <div class="place-address">
        <a :href="placeDetails.url" target="_blank" class="address">
          <font-awesome-icon icon="location-dot" />
          {{ placeDetails.vicinity }}
        </a>
        <a
          :href="'tel:' + placeDetails.international_phone_number"
          v-if="placeDetails.international_phone_number"
          class="contact"
        >
          <font-awesome-icon icon="phone" />
          {{ placeDetails.international_phone_number }}
        </a>
      </div>
    </div>
    <div class="reviews-container">
      <div class="reviews-header">
        <p>{{ numberOfReviews }}</p>
        <p v-if="seeAllReviews" @click="seeAllReviewsHandler">
          {{ toggleSeeReview }}
        </p>
      </div>
      <div class="review-card-container" v-if="!seeReviews">
        <review-card
          v-for="review in reviews"
          :key="review._id"
          :review="review"
        />
      </div>
    </div>
    <div class="seeAll-review-container" v-if="seeReviews">
      <review-full
        v-for="review in reviewArray"
        :key="review._id"
        :review="review"
      />
    </div>
    <div class="recommended-places-container">
      <div class="section-header">
        <h3>More like this</h3>
      </div>
      <div class="recommended-places">
        <place-card
          v-for="(place, index) in similarPlaces"
          :key="index"
          :place="place"
        />
      </div>
    </div>
    <div class="book-btns">
      <button class="yellow-btn" @click="revealModal">Book ride</button>
      <a :href="placeDetails.url" target="_blank" class="transparent-btn">
        Get Directions
      </a>
    </div>
    <div class="ride-modal-container">
      <ride-modal v-if="showModal" @close-modal="onCloseModal" />
    </div>
  </div>
</template>
<script>
import TheNavbarVue from '~/components/TheNavbar.vue'
import reviewCard from '~/components/TheReviewCard.vue'
import placeCard from '~/components/PlaceCard.vue'
import rideModal from '~/components/RideModal.vue'
import ReviewFull from '~/components/ReviewFull.vue'
import Carousel from '~/components/Carousel.vue'
import axios from 'axios'

export default {
  name: 'booking',
  components: {
    TheNavbarVue,
    reviewCard,
    placeCard,
    rideModal,
    ReviewFull,
    Carousel,
  },
  async fetch() {
    try {
      this.placeDetailData = (
        await axios.get(
          `https://ajo-app.herokuapp.com/api/places/${this.$route.params.place}`
        )
      ).data.data
    } catch (error) {
      console.log(error.message)
    }
    try {
      this.similarPlacesData = (
        await axios.get(
          `https://ajo-app.herokuapp.com/api/places/search/similar?placeType=point_of_interest`
        )
      ).data.data
    } catch (error) {
      console.log(error.message)
    }
  },
  data() {
    return {
      showModal: false,
      seeReviews: false,
      placeDetailData: {},
      similarPlacesData: {},
    }
  },
  methods: {
    revealModal() {
      this.showModal = true
      if (this.showModal) {
        this.disableScroll()
      } else {
        this.enableScroll()
      }
    },
    onCloseModal() {
      this.showModal = false
      this.enableScroll()
    },
    disableScroll() {
      let scrollTop = window.scrollY || document.documentElement.scrollTop
      let scrollLeft = window.scrollX || document.documentElement.scrollLeft

      window.onscroll = () => {
        window.scrollTo(scrollLeft, scrollTop)
      }
    },
    enableScroll() {
      window.onscroll = () => {
        window.scrollTo()
      }
    },
    seeAllReviewsHandler() {
      this.seeReviews = !this.seeReviews
    },
  },
  computed: {
    placeDetails() {
      return this.placeDetailData
    },
    reviewArray() {
      return this.placeDetails.reviews
    },
    reviews() {
      if (this.reviewArray) {
        let newReviewArray = this.reviewArray.slice(0, 2)
        return newReviewArray
      }
    },
    numberOfReviews() {
      if (this.reviewArray) {
        if (this.reviewArray.length > 1 || this.reviewArray.length == 0) {
          return this.reviewArray.length + ' reviews'
        } else {
          return this.reviewArray.length + ' review'
        }
      }
    },
    seeAllReviews() {
      if (this.reviewArray) {
        if (this.reviewArray.length > 3) {
          return true
        }
        return false
      }
    },
    toggleSeeReview() {
      if (this.seeReviews) {
        return 'See Less'
      }
      return 'See All'
    },
    similarPlaces() {
      return this.similarPlacesData
    },
  },
}
</script>
<style lang="scss">
.img-container {
  position: relative;
  @include flex-center;
  width: 100%;
  height: 50vh;
  img {
    border-radius: 32px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.place-description-container {
  @include flex-center;
  padding: 23px 32px;
  // flex-direction: column;
  .place-description {
    @include flex-between;
    width: 100vw;
    .place-name {
      display: flex;
      flex-direction: column;
      gap: 5px;
      h2 {
        margin: 0;
        font-weight: 700;
        font-size: 21.88px;
        line-height: 28px;
      }
      p {
        margin: 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #051d8c;
      }
    }
    .place-rating {
      @include flex-center;
      gap: 5px;
      p {
        margin: 0;
        font-weight: 400;
        font-size: 17.5px;
        line-height: 24px;
        color: #adacac;
      }
    }
  }
}
.place-info-container {
  padding: 20px;
  background: #fafafa;
  border-radius: 6px;
  margin: 12px 30px 28px;
  .place-info {
    @include flex-center;
    border-bottom: 1px solid #e6e5e5;
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 26px;
      color: #130f02;
    }
  }
  .place-address {
    padding-top: 17px;
    display: flex;
    flex-direction: column;
    gap: 17px;
    svg {
      color: #b0aa00;
    }
    .address {
      display: flex;
      gap: 11.42px;
      align-items: center;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-decoration: none;
      color: black;
    }
    .contact {
      display: flex;
      gap: 11.42px;
      align-items: center;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      margin: 0;
      text-decoration: none;
      color: black;
    }
  }
}
.reviews-container {
  padding: 23px 32px;
  overflow-x: auto;
  .reviews-header {
    @include flex-between;
    p {
      &:nth-child(1) {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
      }
      &:nth-child(2) {
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        text-align: right;
        color: #051d8c;
        cursor: pointer;
      }
    }
  }
  .review-card-container {
    width: 100%;
    display: inline-flex;
    gap: 60px;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
.recommended-places-container {
  padding: 23px 32px;
  // margin-bottom: 20px;
  .recommended-places {
    @include flex-center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
.book-btns {
  @include flex-center;
  gap: 14px;
  padding: 20px 36px 34px;
  button {
    width: 171px;
    &:nth-child(1) {
      @include yellow-btn;
    }
  }
  a {
    @include transparent-btn;
    text-decoration: none;
    padding: 19px 19px;
  }
}
.ride-modal-container {
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
