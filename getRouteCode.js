
//for comments.js component?
import API from "../../utils/API";
class Books extends Component {
  state = {
    comments: []
  }; 

componentDidMount() {
    this.loadBooks();
  }

  loadComments = () => {
    API.getComments()
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  };

  
  {this.state.comments.length ? (
    <div>
      {this.state.comments.map(comment => (
        <p key={comment.id}>
      
            <p>{book.author}</p>
       
      ))}
    </div>
  ) : (
    <h3>No Results to Display</h3>
  )
  }
  


  //for utils/API.js?
  // Gets the comments for the given park id
  getComments: function(id) {
    return axios.get("/api/comments/" + id);
  },


  
  //for controllers?
  module.exports={
  findById: function(req, res) {
      db.Comments
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
  };

