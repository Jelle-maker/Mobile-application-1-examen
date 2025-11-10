export const API_BASE = 'https://fakestoreapi.com';


export const fetchProducts = () => 
  fetch(`${API_BASE}/products`)
    .then(res => {
      if (!res.ok) 
        {
          throw new Error('Network response was not ok');
        }
      return res.json();
    });

export const fetchProductById = (id) =>
  fetch(`${API_BASE}/products/${id}`)
    .then(res => {
      if (!res.ok) 
        {
          throw new Error('Network response was not ok');
        }
      return res.json();
    });