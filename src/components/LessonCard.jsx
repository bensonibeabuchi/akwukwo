import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'



export default function LessonCard({lesson}){
  console.log(lesson)

  return (
    <div className="rounded-xl w-full bg-red-500 p-2">
      <Link href={`/lesson/${lesson.id}`}>
        <div className="relative w-full aspect-video rounded-t-xl bg-background">
          <Image
            src={lesson.file_url}
            alt={lesson.title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        <p className="font-bold mt-2 truncate capitalize">{lesson.title}</p>
        <p className='flex gap-3 text-sm'>views &#8226; {formatDistanceToNow(new Date(lesson.created_at), { addSuffix: true })}</p>

        <p>{lesson.description}</p>
      </Link>
    </div>

  )
}
