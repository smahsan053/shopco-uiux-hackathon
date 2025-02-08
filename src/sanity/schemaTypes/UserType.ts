import { defineField, defineType } from "sanity";

export const UserSchema = defineType({
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "userId",
      title: "User Id",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "password",
      title: "Password (Hashed)",
      type: "string",
      hidden: true, // Don't expose passwords in Sanity Studio
    }),
    defineField({
      name: "authMethod",
      title: "Authentication Method",
      type: "string",
      options: {
        list: [
          { title: "Email", value: "email" },
          { title: "Google", value: "google" },
          { title: "GitHub", value: "github" },
        ],
      },
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'User', value: 'user' },
          { title: 'Admin', value: 'admin' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
