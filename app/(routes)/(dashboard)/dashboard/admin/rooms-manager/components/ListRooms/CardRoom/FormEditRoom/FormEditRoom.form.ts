import { z } from "zod";

export const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  photo: z.string().optional(),
  pricePerNight: z.coerce.number().min(1, "Price must be greater than 0"),
  beds: z.coerce.number().min(1, "Beds must be at least 1"),
  baths: z.coerce.number().min(0, "Baths must be at least 0"),
  isPublished: z.boolean(),
  capacity: z.coerce.number().min(1, "Capacity must be at least 1"),
  location: z.string().nonempty("Location is required"),
  contactEmail: z.string().email("Invalid email format"),
  contactPhone: z.string().optional(),
});
