import Directory from "../../component/directory/directory.component";

const Home = () => {
  const catergories = [
    {
      id: "1",
      title: "Hats",
      imageurl:
        "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg",
    },
    {
      id: "2",
      title: "Jacket",
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ipZI4q8KR4poqvx4qgQscJsXAT9qCXjMQQ&usqp=CAU",
    },
    {
      id: "3",
      title: "sweater",
      imageurl:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/10/fisherman-sweater-fall-winter-sweater-trends-2022.jpg?fit=750%2C882",
    },
    {
      id: "4",
      title: "Bottoms",
      imageurl:
        "https://arhams.in/wp-content/uploads/2021/08/photo_2021-05-13_17-13-27.jpg",
    },
    {
      id: "5",
      title: "lounge Wear",
      imageurl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/a9a8e34f4f85444caaa7aec300ebc601_9366/Loungewear_Sweat_Pants_Grey_HL9147_21_model.jpg",
    },
  ];

  return <Directory catergories={catergories} />;
};

export default Home;
