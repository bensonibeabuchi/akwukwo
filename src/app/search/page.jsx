export default function SearchPage({ searchParams }) {
  const query = searchParams.query || ""

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Search results for: “{query}”
      </h1>

      {/* TODO: Fetch results from Supabase or API */}
    </div>
  )
}
