import StyledProfile from "../css/StyledProfile";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <StyledProfile>
      <div className="image"></div>
      <div className="info">
        <motion.div
          className="name"
          animate={{ y: [-50, 0], skew: [0, "-10deg"], opacity: [0, 1] }}
        >
          Mike Shaw
        </motion.div>
        <motion.div
          className="title"
          animate={{ y: [-50, 0], skew: [0, "-10deg"], opacity: [0, 1] }}
          transition={{ delay: 0.2 }}
        >
          Web Dev
        </motion.div>
      </div>
      <motion.div
        className="bio"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={(e) => {
          if (e.target instanceof HTMLDivElement) {
            if (e.target.parentElement instanceof HTMLElement) {
              console.log(e.target.parentElement.offsetHeight);
              window.scrollTo({
                left: 0,
                top: e.target.parentElement.offsetHeight,
                behavior: "smooth",
              });
            }
          }
        }}
      >
        <span className="arrows">-&gt;</span> BIO
        <span className="arrows">-&gt;</span>
      </motion.div>
    </StyledProfile>
  );
};

export default Profile;
