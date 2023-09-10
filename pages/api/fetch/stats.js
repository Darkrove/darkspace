import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { formatBytes } from "../../../utils";

const fetch = async () => {
    const sdk = new ThirdwebSDK(Sepolia, {
        secretKey: process.env.THIRDWEB_SECRET,
    });
    const contract = await sdk.getContract(process.env.CONTRACT);
    const data = await contract.call("getFiles");
    if (data.length > 0) {
        const storage = data.reduce(
            (total, f) => (total + f.fileSize.toNumber()), 0
        )
        const files = data.reduce(
            (total, f) => (total + 1), 0
        )

        const stats = {
            size: storage,
            filecount: files
        }

        return stats;
    } else {
        return null;
    }
};

export default async function handler(req, res) {
    const data = await fetch();
    console.log(data)
    res.status(200).json(data);
}
