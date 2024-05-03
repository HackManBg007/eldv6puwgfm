import { z } from "zod";
import { USER_ID_DEFAULT } from "@/config";

// export const schemaUsersIsDefault = z.coerce
//   .number()
//   .refine((num) => num == USER_ID_DEFAULT);

export const schemaUsersIsDefault = z
  .object({
    email: z.string().email(),
    id: z.coerce.number(),
  })
  .refine((d) => USER_ID_DEFAULT === d.id);
