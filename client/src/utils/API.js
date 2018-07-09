import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getData: function(query) {
    return axios.get("/api/data", { params: { q: query } });
  },

  getPark: function(){
    return axios.get("/api/park/:id")
  }
};



// export default {
//   getMaps: function(query) {
//     return axios.get("/api/parks", { params: { q: query } })
//   }
// };