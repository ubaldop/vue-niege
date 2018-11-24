<template>
    <canvas v-if="showSnow" id="vue-niege-canvas"></canvas>
</template>

<script>
import { snow } from "./snow-cannon.js";

export default {
  name: "Snow",
  mounted: function() {
    this.launchSnowing();
  },

  updated: function() {
    this.launchSnowing();
  },

  methods: {
    launchSnowing: function() {
      if (this.active === true) {
        snow({
          speed: this.fallingSpeed(),
          color: this.color,
          zIndex: this.zIndex,
          wind: this.wind,
          swing: this.swing
        });
      }
    },

    fallingSpeed: function() {
      switch(this.speed) {
        case 'l': 
          return 60;
        case 'h':
          return 5;
        default:
          return 20;
      }
    }
  },

  props: {
    color: {
      type: String,
      validator: function(value) {
        return value.length === 7;
      },
      default: "#00FFFF"
    },
    speed: {
      type: String,
      validator: function(value) {
        return value === 'h' || value === 'm' || value === 'l';
      },
      default: 'm'
    },
    zIndex: {
      type: String
    },
    active: {
      type: Boolean,
      default: true
    },
    wind: {
      type: Number,
      default: 1
    },
    swing: {
      type: Number,
      default: 1
    }
  },
  computed: {
    showSnow: function() {
      return this.active === true;
    }
  }
};
</script>

<style>
</style>
