// import PropertyCard from "@/components/PropertyCard";
// import { error } from "console";
// import { fetchProperties } from "@/utils/requests";

// const Properties = async () => {
//   const properties = await fetchProperties();

//   // Sort properties by date
//   properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//   return (
//     <section className="px-4 py-6">
//       <div className="container-xl lg:container m-auto px-4 py-6">
//         {properties.length === 0 ? (
//           <div>
//             <p>No Property Found</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {properties.map((property) => (
//               <PropertyCard key={property._id} property={property} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Properties;

import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const Properties = async () => {
  try {
    const properties = await fetchProperties();

    // Sort properties by date
    properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <div>
              <p>No Property Found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching properties:", error);
    return (
      <div>
        <p>Error fetching properties. Please try again later.</p>
      </div>
    );
  }
};

export default Properties;
