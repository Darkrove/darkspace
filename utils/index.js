import Web3 from "web3"
const web3 = new Web3();

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};

export const shortenAddress = (address) => {
  return `${address?.slice(0, 10)}...${address?.slice(address?.length - 8)}`;
};

export const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const formatDate = (epoch) => {
  const myDate = new Date(epoch * 1000);
  let dateStr = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()
  return dateStr.toString()
}

export const padString = (str) => {
  let res = web3.utils.fromAscii(str)
  while (res.length < 66) {
    res += '0';
  }
  return res;
};

export const unpadString = (str) => {
  let res = web3.utils.toAscii(str)
  return res.replace(/\0/g, '')
}

export const capitalizeFirstLetter = (string) => {
  if (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  } else {
    return "Nan"
  }
  
}