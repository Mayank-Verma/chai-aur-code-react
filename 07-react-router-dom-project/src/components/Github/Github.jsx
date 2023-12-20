// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(function () {
  //   fetch("https://api.github.com/users/mayank-verma")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);
  const data = useLoaderData();
  return (
    <div
      style={{
        backgroundColor: "gray",
        color: "white",
        justifyContent: "center",
        gap: "50px",
        padding: "30px",
        fontSize: "x-large",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src={data.avatar_url}
          width="300px"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div>
        <p>
          <span style={{ color: "#9a3412" }}>Name</span> : {data.name}
        </p>
        <p>
          <span style={{ color: "#9a3412" }}>Number of Public Repos</span> :{" "}
          {data.public_repos}
        </p>
        <p>
          <span style={{ color: "#9a3412" }}>GitHub Followers</span> :{" "}
          {data.followers}
        </p>
        <p>
          <span style={{ color: "#9a3412" }}>GitHub Following</span> :{" "}
          {data.following}
        </p>
        <p>
          <span style={{ color: "#9a3412" }}>Profile</span> : React Developer
        </p>
        <p>
          <span style={{ color: "#9a3412" }}>Technology Stack</span> : HTML,
          CSS, JavaScript, React
        </p>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mayank-verma");
  return response.json();
};
