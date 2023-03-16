import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { unpadString } from "../../../utils";

const fetch = async () => {
  const sdk = new ThirdwebSDK("goerli");
  const contract = await sdk.getContract(process.env.CONTRACT);
  const data = await contract.call("getPublicFiles");
  if (data.length > 0) {
    const parsedFiles = data.map((file, i) => ({
      owner: file.owner,
      username: unpadString(file.username),
      profile: file.profile,
      name: unpadString(file.fileName),
      type: unpadString(file.fileType),
      size: file.fileSize.toNumber(),
      hash: file.fileHash,
      uploadTime: file.fileUploadTime.toNumber(),
      pid: file.id.toNumber(),
      status: file.fileStatus,
    }));
    // console.warn(parsedFiles)
    return parsedFiles.filter((file) => file.hash !== "");
  } else {
    return null;
  }
};

export default async function handler(req, res) {
  const data = await fetch();
  // console.log(data)
  res.status(200).json(data.reverse());
}
