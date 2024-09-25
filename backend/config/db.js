import mongoose from "mongoose";

export const connectDB = async () => {
	await mongoose
		.connect(
			"mongodb+srv://armanjoarder:00112233@cluster0.f1bhr.mongodb.net/food-delivery-app"
		)
		.then(() => {
			console.log("Connected to MongoDB");
		});
};
