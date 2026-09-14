const API_URL = "http://127.0.0.1:8000";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products/`);

  if (!response.ok) {
    throw new Error("Error fetching products");
  }

  return response.json();
};


export const createProduct = async (product) => {
  const response = await fetch(`${API_URL}/products/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error creating product");
  }

  return response.json();
};


export const updateProduct = async (id, product) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error updating product");
  }

  return response.json();
};


export const deleteProduct = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error deleting product");
  }

  return response.json();
};