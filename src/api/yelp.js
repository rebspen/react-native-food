import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ValXrXFUEmCvTYBOcC1rUdrKC1wOlgCIbuLCjUDFVshNrKQh4Z3GbjYsyLOudhaURZ-z7XrzKezwlVsPYWzz7X_1s_aP2lVogHaenMiLktVMy6TPKipzzpZdnhG5XnYx"
  }
});
