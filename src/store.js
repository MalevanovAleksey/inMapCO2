import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      messages: [],
      friends: [],
      markers: [],
      currentProfile: {},
      currentChannel: null,
    };
  },
  mutations: {
    SET_MARKERS(state, markers) {
      state.markers = markers;
    },
    PUSH_MAKER(state, marker) {
      state.markers = marker;
    },
    SET_CURRENT_PROFILE(state, profile) {
      state.currentProfile = profile;
    },
    SET_MESSAGES(state, message) {
      state.messages = message;
    },
  },
  actions: {
    changeMarkers({ commit }, markers) {
      commit("SET_MARKERS", markers);
    },
    pushMarker({ commit }, marker) {
      commit("SET_MARKERS", marker);
    },
    changeCurrentProfile({ commit }, profile) {
      commit("SET_CURRENT_PROFILE", profile);
    },
    changeMessages({ commit }, message) {
      commit("SET_MESSAGES", message);
    },
  },
});

export default store;
