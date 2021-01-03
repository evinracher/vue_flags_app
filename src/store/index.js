import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filteredCountries: []
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload
    },
    setFilteredCountries(state, payload) {
      state.filteredCountries = payload
    }
  },
  actions: {
    async getCountries({ commit }) {
      try {
        // const res = await fetch('https://restcountries.eu/rest/v2/all')
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setCountries', data)
      } catch (error) {
        console.log(error)
      }
    },
    filterByRegion({ commit, state }, region) {
      const filtered = state.countries.filter(country => country.region.includes(region))
      commit('setFilteredCountries', filtered)
    },
    filterByName({ commit, state }, text) {
      const name = text.toLowerCase()
      const filtered = state.countries.filter(country => country.name.toLowerCase().includes(name))
      commit('setFilteredCountries', filtered)
    }
  },
  getters: {
    countriesByPopulation: state => {
      return state.filteredCountries.sort((a, b) => b.population - a.population);
    }
  },
  modules: {
  }
})
