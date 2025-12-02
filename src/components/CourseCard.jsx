import Link from 'next/link'
import Image from 'next/image'


export default function CourseCard({course}){

  return (
    <div style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Image src={course.file_url} alt={course.title} width={200} height={200}/>
      <Link href={`/courses/${course.id}`}>Open</Link>
    </div>
  )
}
