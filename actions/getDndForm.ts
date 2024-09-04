// import getCurrentUser from "./getCurrentUser";

export class UserNotFoundError extends Error {}

// export async function getDndForm() {
//   const user = await getCurrentUser();

//   if (!user) {
//     throw new UserNotFoundError();
//   }

//   const formData = prisma?.form.aggregate({
//     where: {
//       userId: user.id,
//     },
//   });
// }
