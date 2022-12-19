import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";




export default function Home() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const arr = [0xFD94BB1da67AE015E099E40659F70EaD75Bc9B4C, 0x9559fFa8b2Ca27f5154751e913De4aeE1CBaD949, 0xBe96d42fC81B3ad0D9dd8cAC5368C518702BBC50, 0x93f55c0edee527941e1d2cfe364710bC6589eC6d, 0x0DD25606c3AC059800F68ce7f17c19f82E5621B2, 6];
  function handleCLick(e) {
    e.preventDefault();
    arr.includes(parseInt(value))
      ? setError(`You are whitelisted.`)
      : setError(`You are not whitelisted.`);
  }
  return (
    <div >
      <Head>

        <title></title>
        <meta name="description" content="machal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

      <header className='min-w-full text-gray-800 py-14 px-4 md:px-0'>
        <div className='flex items-center container mx-auto max-w-5xl justify-between h-full'>
          
         <Link legacyBehavior href="#">
         
          <a className='font-coiny text-xl md:text-3xl font-bold'>
          <span className='bg-gradient-to-br from-brand-blue to-brand-purple pr-2 bg-clip-text text-transparent'>Three

        </span>
        WiseMen
          </a>
         </Link>
         <ul className='flex'>
          <li className='cursor-pointer'>
            <a href='https://opensea.io' target='_blank' rel='noreferrer'>
             
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 48 48">
<circle cx="24" cy="24" r="20" fill="#1565c0"></circle><path fill="#fff" d="M12,27h7c0,1.491,0.515,2,2,2h7c0.84,0,2.157-0.287,2.707-1.316l6.178-1.798L37,27.564	c-1.074,0.407-1.979,0.648-3.612,3.327C31.138,34.218,30.783,34,28.058,34H19C14.92,34,12,31,12,27L12,27z"></path><path fill="#fff" d="M19.172,16.034C22.759,20.517,19,25,19,25h-6L19.172,16.034z"></path><path fill="#fff" d="M21,27h7c0,0,8.207-5.448-1.655-11.724C23.655,14.379,20,14,20,14S26,21,21,27z"></path><path fill="#fff" d="M25,12L25,12c-0.552,0-1,0.448-1,1v17h2V13C26,12.448,25.552,12,25,12z"></path>
</svg>


            </a>
          </li>
          <li className='cursor-pointer'>
            <a href='https://twitter.com/ThreeWiseMenNFT?t=aZgxVIYTVMRuw7EMX4leAg&s=09' target='_blank' rel='noreferrer'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 48 48">
<path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
</svg>
            </a>
          </li>
          <li className='cursor-pointer'>
            <a href='https://discord.gg' target='_blank' rel='noreferrer'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 48 48" >
<path fill="#536dfe" d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"></path>
</svg>
            </a>
          </li>
         </ul>

          

        </div>

      </header>

      <div className='h-full w-full container max-w-5xl mx-auto flex flex-col items-center pt-4'>
        <h1 className='text-4xl tracking-wide'>ABOUT THREE WISEMEN</h1>
        <h3 className='text-white text-3xl p-3 text-center w-3/5'> 𝕿𝖍𝖊 𝖙𝖍𝖗𝖊𝖊 𝖜𝖎𝖘𝖊 𝖒𝖊𝖓 𝖆𝖗𝖊 𝖓𝖔𝖇𝖑𝖊 𝖕𝖎𝖑𝖌𝖗𝖎𝖒𝖘 𝖋𝖗𝖔𝖒 𝖙𝖍𝖊 𝖊𝖆𝖘𝖙 𝖜𝖍𝖔 𝖜𝖊𝖗𝖊 𝖉𝖎𝖗𝖊𝖈𝖙𝖊𝖉 𝖇𝖞 𝖆 𝖘𝖙𝖆𝖗 𝖎𝖓 𝖙𝖍𝖊 𝖘𝖐𝖞
𝖙𝖔 𝕭𝖊𝖙𝖍𝖑𝖊𝖍𝖊𝖒 𝖔𝖋 𝕵𝖚𝖉𝖊𝖆 𝖙𝖔 𝖜𝖊𝖑𝖈𝖔𝖒𝖊 𝖆𝖓𝖉 𝖈𝖊𝖑𝖊𝖇𝖗𝖆𝖙𝖊 𝖙𝖍𝖊 𝖇𝖎𝖗𝖙𝖍 𝖔𝖋 𝕵𝖊𝖘𝖚𝖘 𝕮𝖍𝖗𝖎𝖘𝖙.
</h3>
<p className='text-white text-md p-2 mt-3 w-3/5'>𝕬𝖑𝖘𝖔 𝖐𝖓𝖔𝖜𝖓 𝖆𝖘 𝕿𝖍𝖊 𝕸𝖆𝖌𝖎, 𝖙𝖍𝖊 𝖙𝖍𝖗𝖊𝖊 𝖜𝖎𝖘𝖊 𝖒𝖊𝖓 𝖛𝖎𝖘𝖎𝖙𝖊𝖉 𝕵𝖊𝖘𝖚𝖘 𝖇𝖊𝖆𝖗𝖎𝖓𝖌 𝖌𝖎𝖋𝖙𝖘 𝖔𝖋 𝕲𝖔𝖑𝖉,
𝕱𝖗𝖆𝖓𝖐𝖎𝖓𝖈𝖊𝖓𝖘𝖊, 𝖆𝖓𝖉 𝕸𝖞𝖗𝖗𝖍.
𝕱𝖔𝖗 𝖆𝖑𝖑, 𝖋𝖆𝖗 𝖆𝖓𝖉 𝖜𝖎𝖉𝖊, 𝖙𝖍𝖊 𝖙𝖍𝖗𝖊𝖊 𝖜𝖎𝖘𝖊 𝖒𝖊𝖓 𝖒𝖆𝖉𝖊 𝖙𝖍𝖊 𝖇𝖎𝖗𝖙𝖍 𝖔𝖋 𝕵𝖊𝖘𝖚𝖘 𝖒𝖊𝖒𝖔𝖗𝖆𝖇𝖑𝖊 𝖇𝖞
𝖆𝖘𝖈𝖊𝖗𝖙𝖆𝖎𝖓𝖎𝖓𝖌 𝖙𝖍𝖊 𝖘𝖍𝖎𝖓𝖎𝖓𝖌 𝖑𝖎𝖌𝖍𝖙 𝖔𝖋 𝖙𝖍𝖊 𝖒𝖊𝖘𝖘𝖎𝖆𝖍 - 𝕵𝖊𝖘𝖚𝖘 𝕮𝖍𝖗𝖎𝖘𝖙, 𝖆𝖓𝖉 𝖕𝖗𝖔𝖛𝖎𝖓𝖌 𝖙𝖔 𝕶𝖎𝖓𝖌 𝕳𝖊𝖗𝖔𝖉 𝖙𝖍𝖆𝖙
𝖓𝖔𝖙𝖍𝖎𝖓𝖌 𝖙𝖗𝖚𝖓𝖈𝖆𝖙𝖊𝖘 𝖉𝖊𝖘𝖙𝖎𝖓𝖞.
𝕿𝖍𝖊 𝖙𝖍𝖗𝖊𝖊 𝖜𝖎𝖘𝖊 𝖒𝖊𝖓 𝖍𝖆𝖛𝖊 𝖎𝖉𝖊𝖓𝖙𝖎𝖋𝖎𝖊𝖉 𝖘𝖔 𝖒𝖆𝖓𝖞 𝖘𝖙𝖆𝖗𝖘 𝖙𝖍𝖗𝖔𝖚𝖌𝖍𝖔𝖚𝖙 𝖙𝖍𝖎𝖘 𝖞𝖊𝖆𝖗 𝖆𝖓𝖉 𝖍𝖆𝖛𝖊 𝖔𝖓𝖈𝖊 𝖆𝖌𝖆𝖎𝖓
𝖈𝖚𝖗𝖆𝖙𝖊𝖉 𝖌𝖎𝖋𝖙𝖘 𝖙𝖔 𝖒𝖆𝖐𝖊 𝖙𝖍𝖊 𝖇𝖎𝖗𝖙𝖍 𝖔𝖋 𝕵𝖊𝖘𝖚𝖘 𝕮𝖍𝖗𝖎𝖘𝖙 (𝖜𝖎𝖉𝖊𝖑𝖞 𝖈𝖊𝖑𝖊𝖇𝖗𝖆𝖙𝖊𝖉 𝖆𝖘 𝕮𝖍𝖗𝖎𝖘𝖙𝖒𝖆𝖘), 𝖆
𝖒𝖊𝖒𝖔𝖗𝖆𝖇𝖑𝖊 𝖔𝖓𝖊.
𝕱𝖔𝖑𝖑𝖔𝖜𝖎𝖓𝖌 𝖙𝖍𝖊 𝖏𝖔𝖚𝖗𝖓𝖊𝖞 𝖔𝖋 𝖙𝖍𝖊 𝖙𝖍𝖗𝖊𝖊 𝖜𝖎𝖘𝖊 𝖒𝖊𝖓 𝖒𝖊𝖆𝖓𝖘 𝖙𝖍𝖆𝖙 𝖞𝖔𝖚 𝖇𝖊𝖑𝖎𝖊𝖛𝖊 𝖎𝖓 𝖉𝖊𝖘𝖙𝖎𝖓𝖞 𝖆𝖓𝖉 𝖆𝖗𝖊
𝖕𝖗𝖊𝖕𝖆𝖗𝖊𝖉 𝖙𝖔 𝖙𝖍𝖗𝖎𝖛𝖊 𝖗𝖊𝖌𝖆𝖗𝖉𝖑𝖊𝖘𝖘 𝖔𝖋 𝖙𝖍𝖊 𝕳𝖊𝖗𝖔𝖉𝖘 𝖎𝖓 𝖞𝖔𝖚𝖗 𝕮𝖍𝖗𝖎𝖘𝖙𝖒𝖆𝖘. 𝕿𝖍𝖎𝖘 𝖎𝖘 𝖔𝖚𝖗 𝖒𝖔𝖙𝖎𝖛𝖆𝖙𝖎𝖔𝖓 𝖆𝖓𝖉
𝖎𝖓𝖘𝖕𝖎𝖗𝖆𝖙𝖎𝖔𝖓 - 𝖙𝖍𝖆𝖙 𝖞𝖔𝖚𝖗 𝖘𝖙𝖆𝖗 𝖉𝖆𝖟𝖟𝖑𝖊𝖘 𝖋𝖔𝖗𝖊𝖛𝖊𝖗 𝖆𝖓𝖉 𝖙𝖍𝖆𝖙 𝖞𝖔𝖚𝖗 𝖘𝖒𝖎𝖑𝖊 𝖓𝖊𝖛𝖊𝖗 𝖉𝖜𝖎𝖓𝖉𝖑𝖊𝖘.
</p>
        <div className='flex flex-col items-center max-w-4xl w-full'>
          <Link legacyBehavior href="./mint.js" passHref>
            <a className='mt-16 font-coiny uppercase inline-flex items-center px-6 oy-2 text-sm md:text-2xl font-medium text-center rounded text-rose-500 hover:bg-rose-600 hover:text-white hover: transition ease-in-out delay-100' >
              Go to minting page
              

            </a>

          </Link>
          <div className='flex flex-col md:flex-row md:space-x-16 space-y-10 items-center mt-20 w-full'> 
     
       <Image  src={"/threewisemen3.jpeg"} width={80} height={100} alt='nft' className='w-64 h-56 rounded-md object-cover mt-6 mr-4 mb-2'></Image>

          <div className='flex flex-col md:items-start items-center justify-center text-center font-Rubik text-white px-4 md:px-10'>
          
          <p className='mt-6 text-md text-lg'>
          𝕭𝖊𝖋𝖔𝖗𝖊 𝕾𝖆𝖓𝖙𝖆 𝕮𝖑𝖆𝖚𝖘, 𝖙𝖍𝖊 𝕿𝖍𝖗𝖊𝖊 𝖂𝖎𝖘𝖊 𝕸𝖊𝖓 𝖜𝖊𝖗𝖊 𝖙𝖍𝖊 𝖋𝖎𝖗𝖘𝖙 𝖙𝖔 𝖕𝖗𝖆𝖈𝖙𝖎𝖘𝖊 𝖙𝖍𝖊 𝖙𝖗𝖆𝖉𝖎𝖙𝖎𝖔𝖓 𝖔𝖋
𝕮𝖍𝖗𝖎𝖘𝖙𝖒𝖆𝖘 - 𝖌𝖎𝖛𝖎𝖓𝖌 𝖌𝖎𝖋𝖙𝖘 𝖆𝖓𝖉 𝖕𝖚𝖙𝖙𝖎𝖓𝖌 𝖆 𝖘𝖒𝖎𝖑𝖊 𝖔𝖓 𝖆𝖑𝖑. 𝕿𝖍𝖊𝖞 𝖛𝖎𝖘𝖎𝖙𝖊𝖉 𝕵𝖊𝖘𝖚𝖘 𝕮𝖍𝖗𝖎𝖘𝖙 (𝖔𝖚𝖗 𝖗𝖊𝖆𝖘𝖔𝖓
𝖋𝖔𝖗 𝕮𝖍𝖗𝖎𝖘𝖙𝖒𝖆𝖘) 𝖆𝖓𝖉 𝖕𝖚𝖙 𝖆 𝖘𝖒𝖎𝖑𝖊 𝖔𝖓 𝕸𝖆𝖗𝖞 𝖆𝖓𝖉 𝕵𝖔𝖘𝖊𝖕𝖍. 𝕿𝖍𝖊𝖞 𝖆𝖗𝖊 𝖇𝖆𝖈𝖐 𝖜𝖎𝖙𝖍 𝖌𝖎𝖋𝖙𝖘 𝖙𝖔 𝖒𝖆𝖐𝖊 𝖙𝖍𝖎𝖘
𝕮𝖍𝖗𝖎𝖘𝖙𝖒𝖆𝖘 𝕸𝖊𝖗𝖗𝖞
          </p>

          </div>

          </div>
          

        </div> <br></br>
        WHITELIST CHECKER 
      <form> 
        <div className='mb-3 pb-2 flex flex-column items-center justify-center'>
          <div className=''>  
          
            <input type="text" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex flex-row justify-center items-center p-2.5 max-w-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white mb-2 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0x7" value={value}
        onChange={(e) => setValue(e.target.value)} > 
            </input> {error ? error : null}
            <div className='flex flex-column'>
            <button className=' p-2 mt-2 inline-flex text-center ml-12 w:4/5 text-rose-500 hover:bg-rose-500 hover:text-white hover: transition ease-in-out delay-100'  onClick={(e) => {
          handleCLick(e);
        }}>CHECK</button>
        
            </div>
          </div>
        </div>
      </form>

      </div>



    </div>
  )
}


