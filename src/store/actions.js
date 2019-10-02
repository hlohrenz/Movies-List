export default {
  /**
   * Add movie element to movies list.
   *
   * @param commit
   * @param state
   * @param movie
   */
  addMovie ({ commit, state }, movie) {
    const movies = state.movies
    movies.push(movie)

    commit('setMovies', movies)
  },

  /**
   * Remove movie element from list by index.
   *
   * @param commit
   * @param state
   * @param index
   */
  removeMovie({ commit, state }, index) {
    const movies = state.movies
    movies.splice(index, 1)

    commit('setMovies', movies)
  },

  /**
   * Sort movies array.
   *
   * @param commit
   * @param movies
   */
  sortMovies({ commit }, movies) {
    commit('setMovies', movies)
  }
}