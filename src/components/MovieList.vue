<template>
    <section class="movie-results">
        <b-table striped
                 ref="table"
                 hover
                 :sort-by.sync="sortBy"
                 :sort-desc.sync="sortDesc"
                 sort-icon-left
                 :fields="fields"
                 :items="movies"
                 v-if="movies.length"
                 @sort-changed="onSorted($event)">
            <template v-slot:cell(actions)="data">
                <b-btn variant="danger" size="sm" @click="removeMovie(data.index)">
                    <font-awesome-icon :icon="['fas', 'trash']" class="text-white" />
                </b-btn>
            </template>
        </b-table>
        <b-alert variant="info" show v-else>There are no movies.</b-alert>
    </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'MovieList',

    data () {
      return {
        sortBy: 'title',
        sortDesc: false,
        fields: [
          { key: 'title', sortable: true },
          { key: 'rating', sortable: true },
          { key: 'actions', label: 'Remove', class: ['fit', 'text-center'] }
        ]
      }
    },

    computed: {
      ...mapState(['movies'])
    },

    methods: {
      ...mapActions(['removeMovie', 'sortMovies']),

      /**
       * On sort, update state.
       */
      onSorted () {
        this.sortMovies(this.$refs.table.sortedItems)
      }
    }
  }
</script>