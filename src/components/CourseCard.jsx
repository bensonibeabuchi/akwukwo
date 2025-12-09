import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import NoThumbnail from '../../public/images/no-thumbnail.jpg'




export default function CourseCard({course}){
  console.log(course)

  return (
    <div className="rounded-xl w-full">
      <Link href={`/courses/${course.id}`}>
        <div className="relative w-full aspect-video rounded-t-xl bg-background">
          <Image
            src={course.thumbnail || NoThumbnail}
            alt={course.title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        <p className="font-bold mt-2 truncate capitalize">{course.title}</p>
        <p className='flex gap-3 text-sm'>views &#8226; {formatDistanceToNow(new Date(course.created_at), { addSuffix: true })}</p>

        <p className='truncate'>{course.description}</p>
      </Link>
    </div>

  )
}
