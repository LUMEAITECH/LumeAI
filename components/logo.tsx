import Image from 'next/image'
import Link from 'next/link'

function EldiaLogo() {
    return (
        <Link href="/" className='flex flex-row gap-2 items-center justify-center'>
            <Image 
                priority={true} 
                src="https://yh6f329f2u.ufs.sh/f/DzBySEN1N0pQXgtk265sZV6gQmHGFhCdo87Ykvl0NSOAIpDR" 
                alt="Lume AI Logo" 
                width={40}  // Adjust these values based on your image size
                height={40} // Adjust these values based on your image size
            />
            <h1 className='text-lg font-bold'>Lume AI</h1>
        </Link>
    )
}

export default EldiaLogo