import axios from 'axios'

export default {
  name: 'App',
  data: () => ({
    first: "",
    second: ""
  }),

  created() {
    axios.get(`http://localhost:8080/api/hello-world`)
    .then(response => {
      let data = response.data
      this.first = data.first
      this.second = data.second
    })
  }
}
