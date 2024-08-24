import { Button } from "@/components/ui/button"
import { MdMenu } from "react-icons/md"

const MobileSideBar = () => {
  return (
    <div className="flex bg-primary-black justify-between items-center p-3">
      <div className="flex gap-2  items-center  justify-start  ">
        <img
          src="/logo.png"
          alt="logo"
          className={` w-6 h-6 `}
        />
        <h3 className={` text-white text-lg xl:text-lg xl:block `}>
          MovieStream
        </h3>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button className="px-4 py-1 h-[30px] text-[13px] border-gray-400 rounded-full bg-none" variant={"outline"}>
          Sign In
        </Button>
        <MdMenu className="text-white/90 cursor-pointer text-2xl"/>

      </div>
    </div>
  )
}

export default MobileSideBar