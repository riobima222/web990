import AlertFailed from "@/components/every/alertFailed";
import AlertSuccess from "@/components/every/alertSuccess";
import Loading from "@/components/every/loading";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

// ICONS
import { GiPadlock } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";

const LoginPage = () => {
  const [alertS, setAlertS] = useState(false);
  const [alertF, setAlertF] = useState(false);
  const [alertMessage, setAlertMessage] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const response = await signIn("credentials", {
      email: form.email.value,
      password: form.password.value,
      redirect: false,
    });
    console.log(response);
    if (response?.ok) {
      setAlertS(true);
      setAlertMessage("berhasil login");
      setTimeout(() => {
        setAlertS(false);
        push("/");
      }, 2500);
    } else {
      setAlertF(true);
      setAlertMessage(response?.error);
      setTimeout(() => {
        setAlertF(false);
      }, 3000);
    }
    setIsLoading(false);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
    form.reset();
    form.email.focus();
  };

  const handleRegister = () => {
    push(
      `/auth/register?returnUrl=${encodeURIComponent(window.location.pathname)}`
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-3">
      <div className="max-w-[30em] w-full py-7 rounded-xl bg-gradient-to-b from-[#990000] via-red-800 to-red-600 flex flex-col justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="login-logo"
          width="140"
          height="140"
        />
        <h1 className="text-4xl font-bold text-white mb-9">Login</h1>

        <form
          onSubmit={(e) => handleLogin(e)}
          className="max-w-[24em] w-full flex flex-col gap-8 items-center justify-center px-2"
        >
          <div className="--INPUT 1-- w-full flex items-center justify-center gap-3">
            <div className="--ICON-- text-white">
              <MdOutlineMailOutline className="text-lg" />
            </div>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="focus:outline-none max-w-[17em] w-full text-sm bg-transparent text-white border-b-2 border-white"
            />
          </div>

          <div className="--INPUT 1-- w-full flex items-center justify-center gap-3">
            <div className="--ICON-- text-white">
              <GiPadlock className="text-lg" />
            </div>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="focus:outline-none max-w-[17em] w-full text-sm bg-transparent text-white border-b-2 border-white"
            />
          </div>
          {!isLoading ? (
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[#990000] rounded-md font-bold tracking-wider transition-all duration-300 focus:scale-75"
            >
              Login
            </button>
          ) : (
            <Loading />
          )}
        </form>

        <div className="text-white text-sm mt-10">
          {"Don't have any account ? register"}{" "}
          <span
            onClick={handleRegister}
            className="text-gray-800 underline hover:no-underline font-bold hover:cursor-pointer"
          >
            here
          </span>
        </div>
      </div>
      {/* ALERT */}
      <AlertSuccess
        className={`${alertS ? "block" : "hidden"}`}
        message={alertMessage}
      />
      <AlertFailed
        className={`${alertF ? "block" : "hidden"}`}
        message={alertMessage}
      />
    </div>
  );
};
export default LoginPage;
