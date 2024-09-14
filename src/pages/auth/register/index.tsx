import Image from "next/image";
import Link from "next/link";

// ICONS
import { CgProfile } from "react-icons/cg";
import { GiPadlock } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import AlertSuccess from "@/components/every/alertSuccess";
import { useContext, useState } from "react";
import Loading from "@/components/every/loading";
import AlertFailed from "@/components/every/alertFailed";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertSuccessContext } from "@/context/alertSuccess";
import { AlertFailedContext } from "@/context/alertFailed";

const RegisterPage = () => {
  const { push } = useRouter();
  const { alertS, setAlertS }: any = useContext(AlertSuccessContext);
  const { alertF, setAlertF }: any = useContext(AlertFailedContext);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const data = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
      admin: form.admin.value,
    };

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });
    const response = await res.json();
    if (response.status) {
      const returnUrl = searchParams.get("returnUrl");
      setIsLoading(false);
      setAlertS(true);
      setTimeout(() => {
        setAlertS(false);
        if (returnUrl) {
          push(returnUrl);
        }
      }, 2500);
    } else {
      setIsLoading(false);
      setAlertF(true);
      setTimeout(() => {
        setAlertF(false);
      }, 3000);
    }
    setAlertMessage(response.message);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
    form.reset();
    form.username.focus();
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
        <h1 className="text-4xl font-bold text-white mb-9">Register</h1>

        <form
          onSubmit={(e) => handleRegister(e)}
          className="max-w-[24em] w-full flex flex-col gap-8 items-center justify-center px-2"
        >
          <div className="--INPUT 2-- w-full flex items-center justify-center gap-3">
            <div className="--ICON-- text-white">
              <CgProfile className="text-lg" />
            </div>
            <input
              type="text"
              placeholder="username"
              required
              name="username"
              className="focus:outline-none max-w-[17em] w-full text-sm bg-transparent text-white border-b-2 border-white"
            />
          </div>

          <div className="--INPUT 2-- w-full flex items-center justify-center gap-3">
            <div className="--ICON-- text-white">
              <MdOutlineMailOutline className="text-lg" />
            </div>
            <input
              type="email"
              placeholder="email"
              required
              name="email"
              className="focus:outline-none max-w-[17em] w-full text-sm bg-transparent text-white border-b-2 border-white"
            />
          </div>

          <div className="--INPUT 3-- w-full flex items-center justify-center gap-3">
            <div className="--ICON-- text-white">
              <GiPadlock className="text-lg" />
            </div>
            <input
              type="password"
              placeholder="password"
              required
              name="password"
              className="focus:outline-none max-w-[17em] w-full text-sm bg-transparent text-white border-b-2 border-white"
            />
          </div>

          <div className="--INPUT 4-- w-full flex items-center justify-center gap-3">
            <div className="--ICON-- text-white">
              <GrUserAdmin className="text-lg" />
            </div>
            <input
              type="password"
              placeholder="admin secret"
              required
              name="admin"
              className="focus:outline-none max-w-[17em] w-full text-sm bg-transparent text-white border-b-2 border-white"
            />
          </div>
          {!isLoading ? (
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[#990000] rounded-md font-bold tracking-wider transition-all duration-300 focus:scale-75"
            >
              Register
            </button>
          ) : (
            <Loading />
          )}
        </form>

        <div className="text-white text-sm mt-10">
          {"Have account ? login"}{" "}
          <Link
            href="/auth/login"
            className="text-gray-800 underline hover:no-underline font-bold"
          >
            here
          </Link>
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
export default RegisterPage;
