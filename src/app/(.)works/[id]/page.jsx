"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
export default function PhotoModal({ params }) {
  const { id } = params;
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/db/${id}`);
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to fetch product");
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage("");
  };

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="fixed inset-0 flex items-end bg-black/30 backdrop-blur-md z-30">
      {/* Slide-up Modal */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="bg-white w-full h-[90vh] rounded-t-lg shadow-lg overflow-y-auto scrollbar-hide relative mx-2"
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex justify-between items-center bg-white px-4 md:px-32 py-3 shadow-md z-30">
          <h1 className="uppercase text-2xl md:text-3xl font-semibold">{product.brand}</h1>
          <button onClick={() => router.back()} className="text-xl font-bold p-2 rounded-full">
            ✕
          </button>
        </div>

        <div className="container mx-auto md:px-28 space-y-6 md:space-y-10 mt-5 px-4">
          <div className="flex gap-5 items-center">
            <Image src="/images/figma.jpeg" alt={product.name} width={100} height={100} className="w-10 h-10 md:h-auto" />
            <p>Designed in Figma</p>
          </div>
          <div className="relative">
            <Image src={product.mainimg} alt={product.name} width={900} height={400} className="w-full rounded-lg" />
            {product.link && (
              <Link href="" className="absolute bottom-2 right-2 rounded-full bg-blue-500 text-white p-2 md:p-5">
              <CgWebsite />
            </Link>
            )}
          </div>
          <p className="text-center my-20 text-2xl uppercase">{product.name} Website</p>

          {/* Clickable Images */}
          <div className="flex justify-center gap-2 md:gap-5">
            <div className="max-w-[500px] w-full">
              <Image
                src={product.img1}
                alt={product.name}
                width={500}
                height={900}
                className="w-full h-auto shadow-lg rounded-lg cursor-pointer"
                onClick={() => openImageModal(product.img1)}
              />
            </div>
            <div className="max-w-[500px] w-full">
              <Image
                src={product.img2}
                alt={product.name}
                width={500}
                height={900}
                className="w-full h-auto shadow-lg rounded-lg cursor-pointer"
                onClick={() => openImageModal(product.img2)}
              />
            </div>
          </div>

          {/* Profile Section */}
          <div className="my-10">
            <div className="flex items-center">
              <div className="flex-1 border-t border-black/10" />
              <Image
                src={`/images/profilePic.png`}
                alt="profilePic"
                width={100}
                height={100}
                quality={50}
                className="object-cover rounded-full mx-4"
              />
              <div className="flex-1 border-t border-black/10" />
            </div>

            <div className="text-center my-5">
              <button className="bg-black px-4 py-2 text-white rounded-full">Contact</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
     {isImageModalOpen && (
  <div className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center z-50 p-4">
    <div className="relative w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-white text-2xl font-bold z-50 bg-black/60 hover:bg-black transition p-2 rounded-full"
        onClick={closeImageModal}
      >
        <IoClose />
      </button>

      {/* Image */}
      <Image
        src={selectedImage}
        alt="Expanded Image"
        width={800}
        height={800}
        className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
      />
    </div>
  </div>
)}

    </div>
  );
}
