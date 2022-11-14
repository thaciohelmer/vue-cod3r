<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" @click="visible = !visible" class="mb-4"
      >Show Message</b-button
    >
    <!-- <transition name="fade">
      <b-alert show variant="primary" v-if="visible">{{ message }}</b-alert>
    </transition> -->
    <!-- <transition name="slide" type="animation" appear>
      <b-alert show variant="primary" v-if="visible">{{ message }}</b-alert>
    </transition>
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert show variant="danger" v-if="visible">{{ message }}</b-alert>
    </transition> -->
    <hr />
    <b-row>
      <b-col md="6">
        <b-form-group label="Enter animation" class="text-left">
          <b-form-select v-model="enterAnimation" class="mb-4">
            <option selected disabled>Select an animation</option>
            <option
              v-for="animation in animationList"
              :key="animation"
              :value="animation"
            >
              {{ animation | capitalFirstLetter }}
            </option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Leave animation" class="text-left">
          <b-form-select v-model="leaveAnimation" class="mb-4">
            <option selected disabled>Select an animation</option>
            <option
              v-for="animation in animationList"
              :key="animation"
              :value="animation"
            >
              {{ animation | capitalFirstLetter }}
            </option>
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <transition
      :enter-active-class="'animated ' + enterAnimation"
      :leave-active-class="'animated ' + leaveAnimation"
    >
      <b-alert variant="warning" v-if="visible" show="">{{ message }}</b-alert>
    </transition>
    <hr />
    <b-button
      variant="warning"
      @click="secondVisible = !secondVisible"
      class="mb-4"
      >Show Message</b-button
    >
    <transition name="slide" mode="out-in">
      <b-alert show variant="success" v-if="secondVisible" key="success"
        ><i class="bi bi-check-circle-fill text-success mr-2"></i
        >{{ message }}</b-alert
      >
      <b-alert show variant="danger" v-else key="danger"
        ><i class="bi bi-x-circle-fill text-danger mr-2"></i
        >{{ message }}</b-alert
      >
    </transition>
    <hr />
    <b-button
      @click="thirdVisible = !thirdVisible"
      :variant="thirdVisible ? 'danger' : 'success'"
      >{{ thirdVisible ? "Hide" : "Show" }}</b-button
    >
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="box" v-if="thirdVisible"></div>
    </transition>
    <hr />
    <div class="mb-4">
      <b-button
        class="mr-2"
        variant="primary"
        @click="selectedComponent = 'AlertInfo'"
        >Info</b-button
      >
      <b-button
        variant="secondary"
        @click="selectedComponent = 'AlertAdvertence'"
        >Advertence</b-button
      >
    </div>
    <transition name="fade" mode="out-in">
      <component :is="selectedComponent"></component>
    </transition>
    <hr />
    <b-button @click="addStudent" class="mb-4" variant="success"
      >Add Student</b-button
    >
    <transition-group name="fade" tag="div">
      <b-list-group v-for="(student, i) in students" :key="student">
        <b-list-group-item @click="removeStudent(i)">{{
          student | capitalFirstLetter
        }}</b-list-group-item>
      </b-list-group>
    </transition-group>
    <div class="heightAdjuste"></div>
    <b-row class="mt-4">
      <b-col v-for="component in componentList" :key="component">
        <b-button variant="success" @click="activeComponent = component">{{
          component | capitalFirstLetter
        }}</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <keep-alive>
          <transition name="slide" mode="out-in">
            <component :is="activeComponent"></component>
          </transition>
        </keep-alive>
      </b-col>
    </b-row>
    <div class="heightAdjuste"></div>
  </div>
</template>

<script>
import AlertAdvertence from "./AlertAdvertence.vue";
import AlertInfo from "./AlertInfo.vue";
import ComponentOne from "./CmpOne.vue";
import ComponentTwo from "./CmpTwo.vue";
import ComponentThree from "./CmpThree.vue";
export default {
  components: {
    AlertAdvertence,
    AlertInfo,
    ComponentOne,
    ComponentTwo,
    ComponentThree,
  },
  data() {
    return {
      message: "User mensage !",
      visible: false,
      enterAnimation: "fadeIn",
      leaveAnimation: "fadeOut",
      animationList: [
        "bounce",
        "shake",
        "zoomOutDown",
        "bounceInLeft",
        "bounceInRight",
        "bounceOutLeft",
        "bounceOutRight",
        "bounceOutDown",
      ],
      secondVisible: false,
      thirdVisible: true,
      baseWidth: 0,
      selectedComponent: "",
      activeComponent: "ComponentOne",
      componentList: ["ComponentOne", "ComponentTwo", "ComponentThree"],
      students: ["roberto", "tereza", "julia", "paulo"],
    };
  },
  filters: {
    capitalFirstLetter(text) {
      return text
        .split(/(?=[A-ZÀ-Ú])/)
        .map((e) => e[0].toUpperCase() + e.substr(1))
        .join(" ");
    },
  },
  methods: {
    beforeEnter(e) {
      this.baseWidth = 0;
      e.style.width = `${this.baseWidth}px`;
    },
    enter(e, done) {
      this.widthAnimation(e, done, false);
    },
    afterEnter() {},
    enterCancelled() {},
    beforeLeave(e) {
      this.baseWidth = 300;
      e.style.width = `${this.baseWidth}px`;
    },
    leave(e, done) {
      this.widthAnimation(e, done, true);
    },
    afterLeave() {},
    leaveCancelled() {},
    widthAnimation(e, done, addOrSubtract) {
      let spin = 1;
      const timer = setInterval(() => {
        const newWidth =
          this.baseWidth + (addOrSubtract ? -spin * 10 : spin * 10);
        e.style.width = `${newWidth}px`;
        spin++;
        if (spin > 30) {
          clearInterval(timer);
          done();
        }
      }, 20);
    },
    addStudent() {
      const s = Math.random().toString(36).substring(2);
      this.students.push(s);
    },
    removeStudent(i) {
      this.students.splice(i, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.heightAdjuste {
  height: 60vh;
  margin-top: 30vh;
}

.box {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5;
  position: absolute;
  width: 100%;
}

.fade-move {
  transition: transform 2s;
}

.slide-enter-active {
  animation: slide-in 2 ease;
  transition: opacity 2;
}

.slide-leave-active {
  animation: slide-out 2 ease;
  transition: opacity 2;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }

  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(40px);
  }
}
</style>
