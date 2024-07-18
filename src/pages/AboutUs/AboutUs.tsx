import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a1a1a] via-[#1c2d5f] to-[#000000] min-h-screen flex items-center justify-center p-10">
      <div className="max-w-4xl mx-auto text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mb-6 text-center"
        >
          We are a passionate team dedicated to providing the best services and
          products to our customers. Our mission is to deliver exceptional
          quality and customer satisfaction through continuous innovation and
          improvement.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center"
        >
          <div className="w-[200px] h-[200px]">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://i.ibb.co/WvzmxSD/ONI.jpg"
              alt="Team Photo"
              className="rounded-full w-full h-full overflow-hidden shadow-lg"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg mt-8 text-center"
        >
          <p>
            Our team consists of experienced professionals in various fields,
            all working together to achieve our common goals. We believe in
            fostering a collaborative and inclusive work environment where
            everyone's ideas are valued and creativity can thrive.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
