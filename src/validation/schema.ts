import { z } from "zod";

export const userRegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long")
      .max(50, "First name must be at most 50 characters long")
      .regex(/^[A-Za-z]+$/, "First name must contain only letters"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name must be at most 50 characters long")
      .regex(/^[A-Za-z]+$/, "Last name must contain only letters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(16, "Password must be at most 16 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const userLoginSchema = z.object({
  email: z
    .string()
    .nonempty("Your email is required!")
    .email("Please enter a valid email address!"),
  password: z
    .string()
    .nonempty("Your password is required!")
    .min(8, "Password must be at least 8 characters long")
    .max(16, "Password must be at most 16 characters long"),
});
