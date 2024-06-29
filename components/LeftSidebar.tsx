'use client';

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';

const LeftSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <section className='left_sidebar'>
      <nav className='flex flex-col'>
        <Link href='/' className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
          <Image src='/icons/logo.svg' alt='logo' width={30} height={27}/>
          <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podcaster</h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive = pathName === route || pathName.startsWith(`${route}/`);
          return <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
            {
              'bg-nav-focus border-r-4 border-orange-1':isActive
            }
          )}>
            <Image src={imgURL} alt={label} height={24} width={24}/>
            <p>{label}</p>
          </Link>
        })}
      </nav>
    </section>
  )
}

export default LeftSidebar