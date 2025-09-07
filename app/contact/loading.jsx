export default function Loading() {
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-gray-300 z-[999]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-[#0f8fd4] border-t-transparent rounded-full animate-spin"></div>
          <h1 className="text-4xl text-gray-900">Loading Contact...</h1>
        </div>
      </div>
    );
  }