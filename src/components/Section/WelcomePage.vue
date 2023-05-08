<template>
  <!-- <NavHeader/> -->
  <div class="card">
    <div class="content__wrapper">
      <div class="content__title">Твои действия на благо</div>
      <div class="content__line"></div>
      <div class="content__description">
        Визуализация картографических данных получит широкое распространение в
        различных отраслях промышленности и сыграет важную роль в будущем
      </div>

      <router-link to="/map">
        <button class="get__started">Перейти к карте</button>
      </router-link>
    </div>
    <div class="content__map">
      <img src="../../assets/icons/map.gif" />
    </div>
  </div>
</template>

<script>
// import NavHeader from './NavHeader/NavHeader.vue';

export default {
  name: "WelcomePage",
  props: {
    msg: String,
  },
  // components: { NavHeader }
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  .content {
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      height: 80vh;
      width: 50%;

      .get__started {
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 20px;
        display: inline-block;
        border-radius: 5px;
        transition: all 0.2s;
        position: relative;
        background: #2faf6b;
        border: none;
        width: 250px;
        height: 54px;
        margin: 10px 0 0 40px;
        color: white;
        font-size: 20px;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(4, 255, 71, 0.2);
        }
      }
    }

    &__map {
      width: 50%;
      img {
        width: 80vh;
        // height: 50%;
      }
    }

    &__title {
      font-size: 50px;
      padding: 20px 40px;
    }

    &__line {
      width: 100px;
      height: 1px;
      border-top: 3px solid #2faf6b;
      margin-left: 40px;
    }

    &__description {
      padding: 20px 40px;
      font-size: 25px;
    }
  }
}
</style>
