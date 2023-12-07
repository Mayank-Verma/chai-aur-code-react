import "./App.css";
import Card from "./componenets/card.jsx";

function App() {
  const friends = [
    {
      name: "Satyam Gupta",
      description:
        "He is an amazing friend, a brother I should say instead!. He is kind caring and very welcoming in nature. He is my best friend.",
      pic: "https://images.unsplash.com/photo-1615148758079-655e33165915?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Manpreet Kaur",
      description:
        "She is a very nice person, she's kind, honest, and innocent, with a heart of Gold!. She is more beautiful from the inside as she is from the outside.",
      pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        My Friends
      </h1>
      {friends.map((friend) => (
        <Card
          name={friend.name}
          description={friend.description}
          pic={friend.pic}
          key={friend.name}
        />
      ))}
    </>
  );
}

export default App;
