import { z } from 'zod'; // Correct import for Zod

const urlSchema = z.object({
    url: z.string().url({ message: "Invalid URL" })
});

export default urlSchema;