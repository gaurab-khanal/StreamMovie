import { FcGoogle } from "react-icons/fc"
import { Button } from "./ui/button"

const GoogleSignIn = ({ isMenuCLick }: { isMenuCLick: boolean }) => {
  return (
    <div>
      <Button className={`px-4 ${isMenuCLick ? 'w-[40px]' : 'w-full'}  py-1 h-[30px] md:h-[40px]  text-[13px] border-gray-400 rounded-full bg-none`} variant={"outline"}>
        {
          isMenuCLick ?
            <div className="md:flex items-center gap-2  text-md">
              <FcGoogle className="hidden md:block w-6 h-6" />
            </div>
            :
            <div className="md:flex items-center gap-2  text-md">
              <FcGoogle className="hidden md:block w-6 h-6" />
              <h2 className="hidden md:block">Sign in with google</h2>
            </div>
        }
        <h2 className="md:hidden text-xs">Sign in</h2>
      </Button>
    </div>
  )
}

export default GoogleSignIn