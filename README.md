# product-visualization-dashboard
Product Visualization Dashboard using MERN Stack &amp; 
{
  name: String,
  category: String,
  price: Number,
  description: String,
  createdAt: Date
}

Three.js
| Method | Route             | Work              |
| ------ | ----------------- | ----------------- |
| GET    | /api/products     | Sab products laao |
| GET    | /api/products/:id | Ek product detail |
| POST   | /api/products     | Product create    |



Page 1: Product List

Example:

Wooden Chair
Furniture
₹2999
[View Details]


Page 2: Add Product

Form:

Name
Category
Price
Description
[Add Product]

Submit par POST API call.

Page 3: Product Detail

Show:

Name
Category
Price
Description

Aur isi page me Three.js scene bhi hoga.

Three.js Part

Product Detail page par:

✅ Cube ya Sphere

✅ Lighting

✅ Rotation Animation