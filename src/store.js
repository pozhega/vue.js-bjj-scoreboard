/* eslint-disable */


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const uri = window.location.search.substring(1);
const params = new URLSearchParams(uri);

export const store = new Vuex.Store({
  state: {
    fighter1: {
      score: 0,
      fault: 0,
      name: '',
      team: '',

    },
    fighter2: {
      score: 0,
      fault: 0,
      name: '',
      team: ''
    },
    chronometer: {
      playing: false,
      defaultTime: parseInt(params.get("defaultTime") || 300),
      time: parseInt(params.get("defaultTime") || 300),
      obj: null,
    },
  },
  getters: {
    fighter1(state) {
      return state.fighter1;
    },
    fighter2(state) {
      return state.fighter2;
    },
    chronometer(state) {
      return state.chronometer;
    },
    time(state) {
      let minutes = parseInt(state.chronometer.time / 60, 10)
      let seconds = parseInt(state.chronometer.time % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return minutes + ":" + seconds;
    },

  },
  mutations: {
    change(state, pay) {
      const target = pay.target;
      const value = pay.value;
      const atribute = pay.atribute;

      if (state[target][atribute] + value < 0) {
        state[target][atribute] = 0;
      } else {
        state[target][atribute] += value;
      }
    },
    resetMatch(state) {
      if (confirm("Are you sure?")) {
        state.fighter1.name = '';
        state.fighter1.team = '';
        state.fighter1.score = 0;
        state.fighter1.fault = 0;

        state.fighter2.name = '';
        state.fighter2.team = '';
        state.fighter2.score = 0;
        state.fighter2.fault = 0;

        state.chronometer.time = state.chronometer.defaultTime;
        state.chronometer.playing = false;


        clearInterval(state.chronometer.obj);
      }

    },
    resetTime(state) {
      if (confirm("Are you sure?")) {
        state.chronometer.time = state.chronometer.defaultTime;

        state.chronometer.playing = false;
        clearInterval(state.chronometer.obj);
      }
    },
    startTime(state) {
      if (state.chronometer.playing == false) {
        state.chronometer.playing = true;

        state.chronometer.obj = setInterval(() => {
          if (state.chronometer.time <= 0) {
            state.chronometer.time = 0;
          } else {
            state.chronometer.time -= 1;
          }

        }, 1000);

      } else {
        state.chronometer.playing = false;
        clearInterval(state.chronometer.obj);
      }
    }
  }
})
