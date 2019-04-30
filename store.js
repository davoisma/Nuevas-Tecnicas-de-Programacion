import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition()

recognition.lang = 'es-es'
recognition.interimResults = false
recognition.maxAlternatives = 1

export default new Vuex.Store({

  	state: {
    	intent: 'None',
    	score: 0,
    	uiState: 'idle',
	    zoom: 3
  	},
  	getters: {
    	intentStr: state => {
      		var str = state.intent
      		str = str.replace(/\b(App.)\b/gi, '')
      		return str
    	}
  	},
  	mutations: {
    	newIntent: (state, { intent, score }) => {
        	state.intent = intent
      		state.score = score
    	},
    	setUiState: (state, status) => {
      		state.uiState = status
    	},
    	setIntent: (state, status) => {
      		state.intent = status
    	},
    	abortRecording: state => {
      		recognition.abort()
      		state.uiState = 'idle'
    	},
    	setZoom: state => {
      		var expr = state.intent
      		switch (expr) {
        		case 'App.Activo':
          			state.zoom = 1
          			break
        		case 'App.Cansado':
          			state.zoom = 2
          			break
        		default:
          			state.zoom = 3
      		}
    	}
  	},
  	actions: {
    	getSpeech({ dispatch, commit, state }) {
      		commit('setUiState', 'listening')
      		state.intent === 'None'
        		? (recognition.continuous = true)
        		: (recognition.continuous = false)

      		recognition.start()

      		recognition.onresult = function(event) {
        		const last = event.results.length - 1
        		const phrase = event.results[last][0].transcript
        		dispatch('getUnderstanding', phrase)
      		}
    	},

    	getUnderstanding({ commit }, utterance) {
	      	commit('setUiState', 'fetching')
	      	const url = `https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/9ec33948-34c2-45d0-a980-472269a6a5a5`

	      	https: axios({
	        	method: 'get',
	        	url,
	        	params: {
	          		verbose: true,
	          		timezoneOffset: -360,
	          		q: utterance
	        	},
	        	headers: {
	          		'Content-Type': 'application/json',
	          		'Ocp-Apim-Subscription-Key': '857f3544c90b4f179573638a4e93a23c'
	        	}
	      	})
	        .then(({ data }) => {
	          	console.log('axios result', data)
	            commit('newIntent', data.topScoringIntent)
	          	commit('setUiState', 'idle')
	          	commit('setZoom')
	        	})
	        .catch(err => {
	          	console.error('axios error', err)
	        })
    	}
  	}
})
