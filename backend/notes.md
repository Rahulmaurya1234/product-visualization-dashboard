Backend me maine Node.js aur Express.js use kiya hai.

Express ek framework hai jo REST APIs banane ko easy banata hai. Iski help se maine GET aur POST APIs create ki hain.

MongoDB database ke saath connection ke liye maine Mongoose use kiya hai. Mongoose ek ODM library hai jo JavaScript objects ko MongoDB documents ke saath map karti hai aur schema define karne me help karti hai.

CORS package use kiya hai taki React frontend aur Node.js backend different ports par hote hue bhi communicate kar saken.

dotenv package environment variables manage karne ke liye use kiya hai. Isme MongoDB connection string aur port number jaise sensitive configurations rakhe jaate hain.

Development ke dauran maine Nodemon use kiya hai, jo code change hone par server ko automatically restart kar deta hai.

Project structure me maine MVC pattern follow kiya hai:

Routes folder incoming requests ko handle karta hai aur unhe controllers tak bhejta hai.

Controllers business logic handle karte hain, jaise products fetch karna ya naya product create karna.

Models folder me Mongoose schemas define kiye gaye hain jo database structure ko represent karte hain.

server.js application ka entry point hai jahan Express server start hota hai aur middleware configure kiye jaate hain.


Route → Request kis URL par aayegi.
Controller → Request aane par kya kaam karna hai.
Model → Database me data ka structure kya hoga.

I built the backend using Node.js, Express.js, and MongoDB.

Express.js is a backend framework that helps me create REST APIs easily. I used it to create APIs for getting products, getting a product by ID, and creating new products.

I used Mongoose to connect Node.js with MongoDB. Mongoose helps me define schemas and interact with the database in an easier way.

I used CORS middleware to allow communication between the React frontend and the Node.js backend running on different ports.

I used dotenv to manage environment variables such as the MongoDB connection string and server port.

For development, I used Nodemon, which automatically restarts the server whenever I make changes to the code.

I followed a structured approach in the backend:

The Routes folder handles incoming API requests.

The Controllers folder contains the business logic, such as fetching products or creating new products.

The Models folder defines the database schema using Mongoose.

The server.js file is the entry point of the application where the Express server is configured and started.

When a user sends a request, it goes to the route, then the controller, then the model interacts with MongoDB, and finally the response is sent back to the user.


ya fir 
I developed the backend using Node.js, Express.js, and MongoDB. Express is used to build REST APIs, Mongoose is used for database interaction, CORS enables frontend-backend communication, and dotenv manages environment variables. I followed a structured architecture with Routes, Controllers, and Models to keep the code organized and maintainable.

# 2
This file defines the Product schema using Mongoose. A schema acts as a blueprint for MongoDB documents. It specifies that each product contains a name, category, price, description, and createdAt field. Finally, the schema is converted into a Product model, which is used to perform database operations such as creating, reading, updating, and deleting products.

Schema = Database ka structure
Model = Database se baat karne ka object



module.exports is used to export the Product model so it can be imported and used in other files. mongoose.model("Product", productSchema) creates a Product model based on the schema. This model is used to perform database operations like create, read, update, and delete while following the structure defined in the schema.

Aur tumhara sentence:

"mongoose.model('Product', productSchema) Product naam ka model banata hai jo productSchema ko follow karta hai"

200 = OK
201 = Created
404 = Not Found
500 = Server Error