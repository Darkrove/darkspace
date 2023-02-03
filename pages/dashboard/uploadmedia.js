import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useStorageUpload } from "@thirdweb-dev/react";
import toast from "react-hot-toast";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]";
import { CustomButton, FormField, Loader } from "../../components";
import { secure } from "../../assets";
import { useStateContext } from "../../context";

const Uploadmedia = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { address, uploadFile } = useStateContext();
  const initState = {
    filename: "",
    file: "",
    type: "",
    size: "",
    hash: "",
  };
  const [form, setForm] = useState({...initState});
  const { mutateAsync: upload } = useStorageUpload();

  const handleFormFieldChange = (fieldName, e) => {
    setForm((state) => ({ ...state, [fieldName]: e.target.value }));
  };

  const captureFile = (e) => {
    const file = e.target.files[0];
    setForm((state) => ({
      ...state,
      file: file,
      type: file.type,
      filename: file.name,
      size: file.size,
    }));
  };

  const uploadToIpfs = async () => {
    try {
      const uploadUrl = await upload({
        data: [form.file],
        options: { uploadWithGatewayUrl: false, uploadWithoutDirectory: true },
      });
      return uploadUrl;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.file) {
      setIsLoading(true);
      const hashUrl = await uploadToIpfs();
      if (hashUrl.message) {
        setIsLoading(false);
        toast.error("😵‍💫 Upload failed, \n please try again.")
        setForm({ file: "", filename: "", type: "", hash: "", size: "" });
        return;
      }
      await uploadFile(
        form.filename,
        form.type,
        form.size,
        hashUrl[0].slice(7),
        session?.user.name,
        session?.user.image
      );
      setIsLoading(false);
      setForm({ file: "", filename: "", type: "", hash: "", size: "" });
    } else {
      alert("Provide valid image");
      setForm({ ...form, image: "" });
    }
  };

  useEffect(() => {
    if (form.file) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [form.file]);

  return (
    <div className="">
      {/* {isLoading && <Loader />} */}
      <div>
        <div>
          <h1 className="text-zinc-200 leading-none mb-3 text-[2.5rem] font-extrabold">
            Upload Media
          </h1>
          <p className="text-zinc-400 m-0 leading-tight">
            Upload videos or images, and use free storage
          </p>
        </div>
        {address ? (
          <form
            onSubmit={handleSubmit}
            className="w-full mt-[20px] flex flex-col gap-[30px]"
          >
            <FormField
              labelName="Media File *"
              placeholder=""
              inputType="file"
              isFile
              value={form.filename}
              isActive={isActive}
              handleChange={(e) => captureFile(e)}
            />
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Media Name *"
                placeholder="Camera101.jpg"
                inputType="text"
                value={form.filename}
                required
                isActive={isActive}
                handleChange={(e) => handleFormFieldChange("filename", e)}
              />
            </div>

            <div className="w-full flex justify-start items-center p-4 bg-violet-700 h-[120px] rounded-[10px]">
              <Image
                src={secure}
                alt="secure"
                width={40}
                height={40}
                className="w-[40px] h-[40px] object-contain"
              />
              <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
                You`&apos;`re data will be 100% secured with us
              </h4>
            </div>

            <div className="flex justify-center items-center mt-[40px]">
              <CustomButton
                btnType="submit"
                title="Upload"
                styles="bg-violet-500 w-64"
                status={isLoading}
              />
            </div>
          </form>
        ) : (
          <p className="font-epilogue font-semibold text-[16px] mt-2 leading-[30px] text-zinc-500">
            Please connect your wallet 🙏
          </p>
        )}
      </div>
    </div>
  );
};

export default Uploadmedia;

export async function getServerSideProps(context) {
  const session = await getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
