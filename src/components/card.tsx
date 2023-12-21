import Image from "next/image";

const Card = ({ data }) => {
    return (
        <div className='grid grid-cols-4 gap-2 place-items-center mb-5'>
            {data.map(({ title, description, source }) => (
              <div className='col-span-1 flex flex-col items-center' key={title}>
               <Image
                 src={source}
                 alt="Digitization"
                 width={50}
                 height={50}
                 className='mb-4'
               />
               <div className="text-sky-900 text-lg font-semibold font-['Inter'] leading-[21px] mb-4">{title}</div>
               <div className="w-[285px] text-center text-black text-sm font-normal font-['Inter'] leading-[18px] mb-4">{description}</div>
             </div> 
            ))}
        </div>
    )
}
export default Card;