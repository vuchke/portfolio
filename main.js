// Nav
const navMenu = {
  data() {
    return {
      navOpen: false,
      timestamp: "",
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow() {
      const today = new Date();
      const timeOfDay = today.getHours();
      console.log(timeOfDay);
      if (timeOfDay >= 5 && timeOfDay < 12) {
        this.timestamp = "Good Morning";
      } else if (timeOfDay >= 12 && timeOfDay < 18) {
        this.timestamp = "Good Afternoon";
      } else {
        this.timestamp = "Good Evening";
      }
    },
  },
};
Vue.createApp(navMenu).mount("#nav");
// // Nav End

// Contact App
const contactApp = {
  data() {
    return {
      valid: false,
      name: null,
      nameError: null,
      email: null,
      emailError: null,
      emailValidError: null,
      message: null,
      messageError: null,
      errors: null,
    };
  },
  computed: {
    formIsValid() {
      if (this.name) {
        this.nameError = false;
      }

      if (this.validEmail(this.email)) {
        this.emailValidError = false;
      }
      if (this.message) {
        this.messageError = false;
      }

      if (this.name && this.email && this.message) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.name) {
        this.nameError = true;
        this.errors.push("name not valid");
      } else {
        this.nameError = false;
      }

      if (!this.email) {
        this.emailError = true;
        this.emailValidError = false;
        this.errors.push("please enter email");
      } else if (!this.validEmail(this.email)) {
        this.emailValidError = true;
        this.emailError = false;
        this.errors.push("email not valid");
      } else {
        this.emailValidError = false;
        this.emailError = false;
      }

      if (!this.message) {
        this.messageError = true;
        this.errors.push("message not valid");
      } else {
        this.messageError = false;
      }

      if (errors.length < 1) {
        this.valid = true;
      }
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};

Vue.createApp(contactApp).mount("#contact");
