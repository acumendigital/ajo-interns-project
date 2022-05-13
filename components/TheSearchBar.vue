<template>
  <div class="search">
    <input
      class="input"
      type="search"
      placeholder="search for your favorite location"
    />
    <img src="~/assets/images/search-icon.svg" alt="Search" />
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.search {
  width: 90%;
  text-align: right;
  input {
    position: absolute;
    left: 32px;
    height: 40px;
    width: 90%;
    background: rgba(235, 235, 235, 0.5);
    border: 0.5px solid rgba(196, 196, 196, 0.3);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.14);
    box-sizing: border-box;
    border-radius: 32px;
    padding: 0rem 1.5rem;
  }
  img {
    width: 20px;
    margin-top: 10px;
    color: #041a7a;
  }
}
</style>
