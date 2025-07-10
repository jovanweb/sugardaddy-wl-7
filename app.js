const { createApp } = Vue

createApp({
    data() {
        return {
            currentStep: 1,
			timeLeft: 300,
			intervalId: null,
			dropdown: false,
			age: false,
        }
    },

	computed: {
		minutes() {
		  return String(Math.floor(this.timeLeft / 60)).padStart(2, '0');
		},
		seconds() {
		  return String(this.timeLeft % 60).padStart(2, '0');
		},
	},
    methods: {

        step(step) {
			this.currentStep = step
        },

		ageValidation() {
			this.age = true;
		},

		startCountdown() {
			if (this.intervalId) clearInterval(this.intervalId);
	  
			this.intervalId = setInterval(() => {
			  if (this.timeLeft > 0) {
				this.timeLeft--;
			  } else {
				clearInterval(this.intervalId);
				this.intervalId = null;
			  }
			}, 1000);
		},
    },
    beforeUnmount() {
		if (this.intervalId) clearInterval(this.intervalId);
	},
	mounted() {
		this.startCountdown()
	}
}).mount('#app')