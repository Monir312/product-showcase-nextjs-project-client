import Image from "next/image";
import Link from "next/link";

export default async function PopularItems() {
  const res = await fetch("https://product-showcase-nextjs-project-server-production-a2ed.up.railway.app/products", {
    cache: "no-store", 
  });

  const allProducts = await res.json();

  const popular = allProducts
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Popular Items
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {popular.map((product) => (
            <div
              key={product._id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition group"
            >

              <div className="w-full h-48 relative mb-4">
             <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              </div>


              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>


              <p className="text-gray-600 text-sm mt-1">
                {product.shortDesc
                  ? product.shortDesc.slice(0, 60)
                  : "No description available."}
              </p>


              <p className="text-pink-600 font-bold text-lg mt-2">
                ${product.price}
              </p>

              <Link
                href={`/products/${product._id}`}
                className="mt-4 inline-block px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
