import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div
      style={{
        backgroundColor: "gray",
        color: "white",
        textAlign: "center",
        padding: "30px",
        fontSize: "x-large",
      }}
    >
      User : {userid}
    </div>
  );
}

export default User;
