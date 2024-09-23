import Image from 'next/image'

export const Logo = () => {
  return (
    <div className={'flex flex-col items-center gap-4 text-white font-bold'}>
      <div className={'bg-white rounded-full p-4'}>
        <Image src={'/next.svg'} alt={''} width={'100'} height={'100'} />
      </div>
      <p>Chris&apos;s Hub</p>
    </div>
  )
}
