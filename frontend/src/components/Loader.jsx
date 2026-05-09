function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">

      {/* SPINNER */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* TEXT */}
      <p className="mt-4 text-gray-600 text-lg">
        Loading, please wait...
      </p>

    </div>
  );
}

export default Loader;