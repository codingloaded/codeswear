import { useRouter } from 'next/router'

export default function Slug() {
  const router = useRouter()
  return (
    <div>
      <p>Post: {router.query.slug}</p>
    </div>
  )

}