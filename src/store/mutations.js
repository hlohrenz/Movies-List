import Vue from 'vue'

export default {
  /**
   * Mutate movies state prop.
   *
   * @param state
   * @param movies
   */
  setMovies (state, movies) {
    // Make sure to store it in localStorage too for initial state
    localStorage.setItem('movies', JSON.stringify(movies))
    Vue.set(state, 'movies', movies)
  }
}