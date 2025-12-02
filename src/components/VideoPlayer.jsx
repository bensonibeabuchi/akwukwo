export default function VideoPlayer({src}) {
  if (!src) return <div>No video</div>
  return (
    <video controls style={{width:'100%', maxHeight:480}}>
      <source src={src} />
      Your browser does not support the video tag.
    </video>
  )
}
