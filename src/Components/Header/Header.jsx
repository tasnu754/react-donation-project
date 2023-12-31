import PropTypes from "prop-types";

const Header = ({ handleInput, handleBtnClick }) => {
  return (
    <div className="relative">
      <div>
        <div>
          <img
            className="hero h-[50vh] md:h-[60vh] lg:h-[75vh] "
            style={{
              backgroundImage: "url('https://i.ibb.co/J5JmBm4/bannner.png')",
              opacity: 0.1,
            }}
          />
        </div>
        <div className="hero-content text-center text-neutral-content absolute top-[30%] lg:top-[40%] lg:left-[30%]">
          <div className="">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>

            {/* Input area  */}

            <div className="flex justify-center items-center mt-10">
              <div className="h-[59px]">
                <input
                  onChange={handleInput}
                  type="text"
                  placeholder="Search Here…"
                  className="h-[53px] pb-1 bg-cover text-black input input-bordered rounded-r-none md:w-[400px] lg:w-[470px]"
                />
                <button
                  onClick={handleBtnClick}
                  className="h-[52px] items-center btn btn-primary bg-[#FF444A] border-none rounded-l-none"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleBtnClick: PropTypes.func.isRequired,
};

export default Header;
