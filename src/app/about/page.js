import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600 p-8 flex-col gap-8">
      <h1 className="text-2xl font-bold text-white text-center">
        Tu ainda não me mandou o link do notion poha
      </h1>
      <Link href="/">
        <button className="bg-amber-300 rounded-2xl px-6 py-2 font-bold">
          Voltar
        </button>
      </Link>
    </div>
  );
};

export default page;
