import Header from "../Header/Header";


const Home = () => {
    return (
      <div>
        <Header></Header>
        <div className="w-[50%] h-[50%] ">
          <p className="bg-[#79C23F26]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eveniet dolor esse quo, exercitationem doloribus molestiae pariatur
            ut facere facilis ipsa id beatae harum non vero impedit, error, quam
            totam?
          </p>
          <p
            className="bg-[#79C23F33]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            earum.
          </p>
          <p className="bg-[#FF444A]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos
            deserunt repellat sapiente fugit est blanditiis. Mollitia esse
            consectetur cum.
          </p>
        </div>
      </div>
    );
};

export default Home;