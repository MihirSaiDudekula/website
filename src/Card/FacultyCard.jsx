import Image from "next/image";


export default function FacultyCard({person}){
    return(
        <div className="flex justify-center items-center m-[20px] shadow-2xl">
            <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
            bg-gradient-to-r from-cyan-500 to-blue-500 ...
            ">
                <div className="p-5 h-full flex flex-col items-center ">
                    <Image src={person.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '200px', height: '200px' }}
                    className="rounded-full "/>
                    <h1 className="text-3xl text-white p-4 ">{person.name}</h1>
                    <p className="h-[30%] text-yellow-600">{person.desc}</p>
                    <a href={person.url} className="text-white">
                        <Image src="/home.gif" width={50} height={50}/>
                    </a>
                </div>
            </div>
        </div>
    )
}