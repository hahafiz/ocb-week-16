import Card from "./components/Card";

const user = {
  name: "Meow",
  avatar: "https://i.imgur.com/yXOvdOSs.jpg",
  city: "Seattle",
  follower: 1234,
  following: 4321,
  education: {
    primary: "SK Megah Ria",
    secondary: "SMK Seri Kota Puteri 2",
  },
};

function App() {
  return (
    <>
      <Card user={user} />
    </>
  );
}

export default App;
