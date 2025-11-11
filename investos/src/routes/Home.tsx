import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sticker from "../components/Sticker";
import { Wallet, Plant } from "../components/stickers/HomeSticker";

// export default function Home() {
//   return (
//     <section className="relative grid md:grid-cols-2 gap-6 items-center">
//       <Sticker pos={{ top: "-30px", right: "40px" }} size={60}>
//         <Wallet />
//       </Sticker>
//       <Sticker pos={{ bottom: "-20px", left: "40px" }} size={60}>
//         <Plant />
//       </Sticker>
//       {/* rest of Home code */}
//     </section>
//   );
// }

export default function Home() {
  return (
    <section className="hero-center container mx-auto px-4">
      <Sticker pos={{ top: "-30px", right: "40px" }} size={60}>
        <Wallet />
      </Sticker>
      <Sticker pos={{ bottom: "-20px", left: "40px" }} size={60}>
        <Plant />
      </Sticker>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl text-center"
      >
        <div className="mb-4 flex items-center justify-center">
          {/* <span className="kicker">Investos</span> */}
        </div>

        <h1 className="h1">
          Discover your investing personality with Investos.
        </h1>

        <p className="lead mx-auto">
          Answer a short quiz to find out which investor profile suits you and
          get a beginner-friendly asset mix.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/quiz" className="btn">
            Start Quiz
          </Link>
          <Link to="/about" className="btn-outline">
            How it works
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.995 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="card p-4 mx-auto max-w-lg text-sm text-slate-700">
            Only for education purposes. Your answers stay in your browser.
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
