export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center mt-5">Contact</h1>
      <form
        action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT}
        method="post"
        className="flex flex-col gap-4 max-w-screen-md mx-auto p-5 md:p-0 my-5"
      >
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input id="name" name="name" className="border p-2 rounded w-full" />

        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="border p-2 rounded w-full"
        />

        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border p-2 rounded w-full h-40"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-1/2 mx-auto rounded mt-4"
        >
          Submit
        </button>
      </form>
    </>
  );
}
