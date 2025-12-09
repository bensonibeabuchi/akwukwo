

export default function RightSidebar({ children }) {
  return (
    <aside className="hidden lg:block w-72 h-fit m-8 sticky top-48 p-6 bg-background border border-gray-300 shadow-2xl">
      {children}
    </aside>
  );
}
