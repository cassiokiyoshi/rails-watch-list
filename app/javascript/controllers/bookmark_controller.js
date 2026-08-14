import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["movieId"]

  selectMovie(event) {
    const movieId = event.currentTarget.dataset.movieId

    this.movieIdTarget.value = movieId

    console.log("Selected movie:", movieId)
  }
}
