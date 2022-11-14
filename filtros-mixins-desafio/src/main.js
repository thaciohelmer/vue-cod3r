import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('wordLength', function (text) {

	const singleWords = text.split(' ').filter(e => e.length !== 0)
	var wordsWithLength = []

	singleWords.forEach(e => {
		wordsWithLength.push(`${e} (${e.length})`)
	})

	return wordsWithLength.join(' ')
})

Vue.filter('wordLengthMap', function (text) {
	return text.split(' ').filter(e => e.length !== 0).map(e => `${e} (${e.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
