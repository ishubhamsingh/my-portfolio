import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
    return (
        <nav className="flex flex-row items-stretch justify-between p-6 border-b-2 border-slate-200 dark:border-slate-800">
            <div className='order-first flex flex-row space-x-8'>
                <h1 className='text-slate-900 dark:text-white font-sans font-bold uppercase text-lg subpixel-antialiased'>ishubhamsingh</h1>
            </div>
            <div className="order-last flex flex-row space-x-8">
            <div className='order-1 flex flex-row space-x-8'>
                <a href='/' className='order-1 text-slate-800 dark:text-slate-200 font-sans font-regular text-lg subpixel-antialiased'>Home</a>
                <a href='/blogs' className='order-2 text-slate-800 dark:text-slate-200 font-sans font-regular text-lg subpixel-antialiased'>Blogs</a>
                <a href='/about' className='order-3 text-slate-800 dark:text-slate-200 font-sans font-regular text-lg subpixel-antialiased'>About</a>
            </div>
            <div className='order-2'>
                <ThemeSwitch />
            </div>    
            </div>
       </nav>
    )
}