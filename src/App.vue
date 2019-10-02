<template>
    <div id="app" class="container py-3">
        <MovieModal></MovieModal>

        <div class="text-right">
            <b-button v-b-modal.modal-movie variant="primary">Add Movie</b-button>
        </div>

        <hr />

        <h3>Movie Results</h3>
        <MovieList></MovieList>
    </div>
</template>

<script>
  import MovieModal from './components/MovieModal.vue'
  import MovieList from './components/MovieList.vue'

  export default {
    name: 'app',

    components: {
      MovieModal,
      MovieList
    }
  }
</script>