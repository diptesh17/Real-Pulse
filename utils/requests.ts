const apidomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch allProperties
async function fetchProperties() {
  try {
    // If domain is not available yet
    if (!apidomain) {
      return [];
    }
    const res = await fetch(`${apidomain}/properties`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data ");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// fetch Single Property
async function fetchProperty(id) {
  try {
    // If domain is not available yet
    if (!apidomain) {
      return null;
    }
    const res = await fetch(`${apidomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data ");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
