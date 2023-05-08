<template>
  <nav class="nav__header">
    <div class="nav__content-left">
      <div class="nav__avatar">
        <img alt="Vue logo" src="../../assets/icons/logo.png" />
      </div>
      <div class="nav__msg">
        <ul>
          <li><img src="../../assets/icons/facebook.png" /></li>
          <li><img src="../../assets/icons/telegram.png" /></li>
          <li><img src="../../assets/icons/vk.png" /></li>
        </ul>
      </div>
    </div>
    <div @click="addMarker">Добавить точку</div>
    <div class="nav__content-right">
      <div class="nav__menu">
        <ul>
          <li>
            <router-link to="/main" active-class="-active">
              Главная
            </router-link>
          </li>
          <li>
            <router-link to="/map" active-class="-active"> Карта </router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="-active"> Блог </router-link>
          </li>
          <li>
            <router-link to="/about" active-class="-active">
              О проекте
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    addMarker() {
      this.$store.dispatch("changeMarkers", [
        ...this.$store.state.markers,
        { coords: [51.53, 45.9535] },
      ]);
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  &__header {
    display: flex;
    height: 5vh;
    padding: 10px 0;
    width: 90%;
    justify-content: space-between;
    color: white;
    margin-left: 40px;
  }

  &__content {
    &-left {
      display: flex;
      align-items: center;
    }
    &-right {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        list-style: none;
        text-transform: uppercase;
        justify-content: space-between;
        width: 320px;

        li a {
          all: unset;
          color: white;

          &.-active {
            color: #2faf6b;
          }
        }

        & li a:hover {
          cursor: pointer;
          color: #2faf6b;
        }
      }
    }
  }
  &__avatar {
    border: 1px solid #9f9fa6;
    border-radius: 50px;
    padding: 10px;
    height: 20px;
    margin-bottom: 5px;
    img {
      height: 20px;
    }
  }
  &__msg {
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      width: 120px;
      li {
        img {
          width: 30px;
        }
        &:last-child img {
          height: 30px;
        }
      }
    }
  }
}
</style>
