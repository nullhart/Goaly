<template>
  <div id="app">
    <div class="banner-container">
      <div
        class="banner"
      >{{`${this.$store.state.Days.length} days completed out of ${daysInMonth(3,2019)} days`}}</div>
    </div>

    <transition-group class="block-container" name="fade">
      <div
        class="block"
        @click="toggle(index)"
        :class="[isActive(index) ? 'active' : 'in-Active']"
        v-for="(days,index) in daysInMonth(3,2019)"
        :key="index +'2'"
      >{{index}}</div>
    </transition-group>
  </div>
</template>

<script>
import { confetti } from 'dom-confetti';
export default {
  name: "app",
  components: {},
  mounted() {},
  methods: {
    daysInMonth: (month, year) => {
      return new Date(year, month, 0).getDate();
    },
    isActive: function(day) {

      
      return this.$store.state.Days.includes(day);
    },
    toggle: function(day) {
      confetti(event.target, {
        angle: 90,
        spread: 50,
        startVelocity: 19,
        elementCount: 25,
        decay: 0.85
      });
      if (this.$store.state.Days.includes(day)) {
        this.$store.dispatch("remove", day);
      } else {
        this.$store.state.Days.push(day);
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  background-color: #2c3e50;
  padding: 0px;
  padding: 10px;
}
.banner {
  font-size: 40pt;
}

.banner-container {
  text-align: center;
  color: blue;
}

.block-container {
  display: grid;

  grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
  grid-template-rows: 18% 18% 18% 18% 18%;
}

.active {
  background-color: #26de81;
}

.in-Active {
  background-color: #e74c3c;
}

.block {
  color: white;
  padding-top: 8px;
  padding-left: 8px;
  width: 100%;
  height: 18vh;
  border: solid 0.02px;
  transition: 0.2s;
}
</style>
