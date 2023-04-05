import React from "react";
import axios from "axios";



const baseURL = "https://642a6f8700dfa3b54745ac1d.mockapi.io/books";

export default function Day7() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);

  if (!post) return null;

  function handleItems(item) {
    return (
      <tbody key={item.id}>
        <tr>
          
          <td scope="row">{item.Author}</td>
          <td>{item.Book}</td>
        </tr>
      </tbody>

    );


  }

  return (
    <div>
      <table class="table" style={{ width: "30%", marginLeft: "35rem" }}>
        <thead>
          <tr>
            <th scope="col">AUTHOR NAME</th>
            <th scope="col"> BOOK NAME</th>
          </tr>
        </thead>
        {post.map(handleItems)}
      </table>

    </div>
  );
}