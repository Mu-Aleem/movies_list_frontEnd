import { useForm } from "react-hook-form";
import FooterIconComp from "./FooterIconComp";
import { useState } from "react";
import httpRequest from "../axios/index";
import { LOGIN } from "../constants/apiEndPoints";

const SignInComp = () => {
  const [Loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    try {
      setLoading(true);
      //   const resp = await httpRequest.post(`${LOGIN}`, { data });
      //   console.log("🚀 ~ onSubmit ~ resp:", resp);
    } catch (error) {
      console.log(
        "🚀 ~ file: Login.js:173 ~ handleSubmit ~ error:",
        error.message
      );

      // toast.error(
      //   (error?.message || "Something went wrong").replace(
      //     "Validation failed: ",
      //     ""
      //   )
      // );
    } finally {
      setLoading(false);
    }
    console.log(data);
  };
  return (
    <div className="bg-[#093545] w-full h-auto flex flex-col ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[300px] mx-auto flex flex-col gap-7 justify-center items-center mt-[220px] mb-[120px]"
      >
        <div className="text-[64px] font-semibold text-white text-center">
          Sign In
        </div>
        <div className="w-full">
          <input
            type="text"
            alt="Email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            //   className="h-[45px] w-full bg-[#224957] rounded-xl pl-4"
            className={`h-[45px] w-full bg-[#224957] rounded-xl pl-4 ${
              errors.email ? "border border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-[12px] mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            alt="Password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className={`h-[45px] w-full bg-[#224957] rounded-xl pl-4 ${
              errors.password ? "border border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-[12px] mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex w-full justify-center items-center gap-4">
          <input
            type="checkbox"
            id="checkbox"
            className="h-[17px] w-[18px]  rounded-none accent-[#224957] "
            {...register("rememberMe")}
          />
          <label for="checkbox" className="font-normal text-white text-[14px]">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full h-[54px] rounded-[10px] bg-[#2BD17E] flex justify-center items-center text-white font-semibold text-[16px]"
          disabled={Loading}
        >
          {Loading ? "Loading..." : "Login"}
        </button>
      </form>

      <FooterIconComp />
    </div>
  );
};

export default SignInComp;
