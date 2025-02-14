// the file is in page/api/contact

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//       const { firstName, lastName, email, phone, message } = req.body;
  
//       if (!firstName || !lastName || !email || !phone || !message) {
//         return res.status(400).json({ error: "All fields are required" });
//       }
  
//       try {
//         await client.connect();
//         const database = client.db("HackathonConnect");
//         const collection = database.collection("contacts");
  
//         await collection.insertOne({
//           firstName,
//           lastName,
//           email,
//           phone,
//           message,
//           createdAt: new Date(),
//         });
  
//         res.status(200).json({ message: "Contact saved successfully!" });
//       } catch (error) {
//         console.error("Error saving contact:", error); // Log the actual error
//         res.status(500).json({ error: "Internal server error" });
//       } finally {
//         await client.close();
//       }
//     } else {
//       res.setHeader("Allow", ["POST"]);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  