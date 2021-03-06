import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../swiper.css";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

const ProjetSection = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        default: { duration: 2 },
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: (i) => ({ opacity: 1, transition: { delay: 1 * i } }),
  };
  return (
    <main className="projets">
      <motion.section
        className="third"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <h2>My projects</h2>
        <Swiper
          spaceBetween={500}
          slidesPerView={1}
          centeredSlides
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={swiper => console.log(swiper)}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
        >
          <SwiperSlide>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    className="img-card"
                    src="./captures/netflix.JPG"
                    alt="Netflix Clone"
                  />
                </div>
                <div class="flip-card-back">
                  <h3>Netflix Clone</h3>
                  <p>React JS & API</p>
                  <div className="buttons-card">
                    <a
                      href="https://github.com/AntoineLemlin/netflix_clone"
                      target="_blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                    <a
                      href="https://distracted-mcclintock-776f91.netlify.app/"
                      target="_blank"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    className="img-card"
                    src="./captures/mcdonald.JPG"
                    alt="McDonald's App"
                  />
                </div>
                <div class="flip-card-back">
                  <h3>McDonald's App</h3>
                  <p>React JS & Node JS</p>
                  <div className="buttons-card">
                    <a
                      href="https://github.com/AntoineLemlin/technical-test-2021-Mango3D"
                      target="_blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                    <a
                      href="https://radiant-reaches-74070.herokuapp.com/"
                      target="_blank"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    className="img-card"
                    src="./captures/spacetimer.JPG"
                    alt="SpaceTimer"
                  />
                </div>
                <div class="flip-card-back">
                  <h3>SpaceTimer</h3>
                  <p>React JS</p>
                  <div className="buttons-card">
                    <a
                      href="https://github.com/AntoineLemlin/react-pomodoro"
                      target="_blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                    <a
                      href="https://spacetimecloc.netlify.app/"
                      target="_blank"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    className="img-card"
                    src="./captures/forum.JPG"
                    alt="Forum"
                  />
                </div>
                <div class="flip-card-back">
                  <h3>Forum Project</h3>
                  <p>PHP & Bootstrap</p>
                  <div className="buttons-card">
                    <a
                      href="https://github.com/AntoineLemlin/The-forum"
                      target="_blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                    <a
                      href="http://thebestforum.herokuapp.com/src/public/"
                      target="_blank"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    className="img-card"
                    src="./captures/rpg.JPG"
                    alt="RPG Game"
                  />
                </div>
                <div class="flip-card-back">
                  <h3>RPG game</h3>
                  <p>Javascript vanilla</p>
                  <div className="buttons-card">
                    <a
                      href="https://github.com/AntoineLemlin/BeatThem_JS_RPG"
                      target="_blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                    <a
                      href="https://antoinelemlin.github.io/BeatThem_JS_RPG/"
                      target="_blank"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.section>
    </main>
  );
};

export default ProjetSection;
