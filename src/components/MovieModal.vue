<template>
    <b-modal id="modal-movie" title="Add Movie" @ok.prevent="onSubmit" @hidden="closeModal">
        <ValidationObserver ref="observer" v-slot="{ errors, invalid, validated }">
            <b-alert :show="validated && invalid" variant="danger">
                <div class="d-flex align-items-center">
                    <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="mr-2" />
                    <strong>Whoops! You have some errors in your form.</strong>
                </div>
                <ul class="mb-0 mt-3">
                    <template v-for="error in errors">
                        <li v-if="error.length">{{ error[0] }}</li>
                    </template>
                </ul>
            </b-alert>
            <b-form>
                <ValidationProvider name="title" rules="required" v-slot="{ validated, errors }">
                    <b-form-group label="Movie Title"
                                  label-for="movie-title">
                        <b-form-input id="movie-title"
                                      v-model="movie.title"
                                      :class="{ 'is-invalid': validated && errors.length }"
                                      required>
                        </b-form-input>
                    </b-form-group>
                </ValidationProvider>

                <ValidationProvider name="rating" rules="required" v-slot="{ validate }">
                    <b-form-group label="Rating">
                        <div class="star-ratings">
                            <font-awesome-icon :icon="[movie.rating >= 1 ? 'fas' : 'far', 'star']" @click="setRating(1) || validate(1)" />
                            <font-awesome-icon :icon="[movie.rating >= 2 ? 'fas' : 'far', 'star']" @click="setRating(2) || validate(2)" />
                            <font-awesome-icon :icon="[movie.rating >= 3 ? 'fas' : 'far', 'star']" @click="setRating(3) || validate(3)" />
                            <font-awesome-icon :icon="[movie.rating >= 4 ? 'fas' : 'far', 'star']" @click="setRating(4) || validate(4)" />
                            <font-awesome-icon :icon="[movie.rating >= 5 ? 'fas' : 'far', 'star']" @click="setRating(5) || validate(5)" />
                        </div>
                    </b-form-group>
                </ValidationProvider>
            </b-form>
        </ValidationObserver>
    </b-modal>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'MovieModal',

    data () {
      return {
        movie: {
          title: null,
          rating: 0
        }
      }
    },

    methods: {
      ...mapActions(['addMovie']),

      /**
       * On form submit, validate and add resource.
       *
       * @returns {Promise<void>}
       */
      async onSubmit () {
        const isValid = await this.$refs.observer.validate()

        if (! isValid) {
          return
        }

        // Valid
        this.addMovie(this.movie)
        this.closeModal()
      },

      /**
       * Close modal.
       */
      closeModal () {
        this.resetForm()
        this.$bvModal.hide('modal-movie')
      },

      /**
       * Set rating for movie.
       *
       * @param num
       */
      setRating (num) {
        this.movie.rating = num
      },

      /**
       * Reset the form completely.
       */
      resetForm () {
        this.movie = {
          title: '',
          rating: 0
        }
      }
    }
  }
</script>