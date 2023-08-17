import Link from "next/link";


export const Footer: React.FC = () => {

    return(
        <div className="flex flex-row justify-between space-x-3 w-[100%]">
            <Link href="/connectWallet" className="w-[100%]">
            <button className="w-[100%] h-10 bg-[#3EB073] border-2 rounded border-green-500 text-white font-redhat font-bold items-center text-[12px] sm:text-[17px]">Connect Wallet</button>
            </Link>
            <Link href="#" className="w-[100%]">
            <button className="w-[100%] h-10 bg-[#123223] border-2 rounded border-green-500 text-green-400 font-redhat font-bold items-center text-[12px] sm:text-[17px]">Buy / Long</button>
            </Link>
            <Link href="#" className="w-[100%]">
            <button className="w-[100%] h-10 bg-[#3E2B2B] border-2 rounded border-[#FF5D5D] text-[#FF5D5D] font-redhat font-bold items-center text-[12px] sm:text-[17px]">Sell / Short</button>
            </Link>
        </div>
    )
}