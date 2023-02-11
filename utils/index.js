import Web3 from "web3"
import { intlFormatDistance } from "date-fns"
import { intlFormat } from "date-fns"
import dateFormat from "dateformat"

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
  const uploadDate = new Date(epoch * 1000);
  // const currentDate = new Date();
  // let dateDiff = intlFormatDistance(new Date(uploadDate.getFullYear(), uploadDate.getMonth()+1, uploadDate.getDate(), uploadDate.getHours(), uploadDate.getMinutes(), uploadDate.getSeconds()),
  // new Date(currentDate.getFullYear(), currentDate.getMonth()+1, currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()))
  // let dateStr = uploadDate.getFullYear() + "/" + (uploadDate.getMonth() + 1) + "/" + uploadDate.getDate() + " " + uploadDate.getHours() + ":" + uploadDate.getMinutes() + ":" + uploadDate.getSeconds()
  // let date = intlFormat(new Date(uploadDate.getFullYear(), uploadDate.getMonth(), uploadDate.getDate(), uploadDate.getHours(), uploadDate.getMinutes(), uploadDate.getSeconds()), {
  //     year: 'numeric',
  //     month: 'numeric',
  //     day: 'numeric',
  //     hour: 'numeric',
  // })
  const now = new Date(uploadDate.getFullYear(), uploadDate.getMonth(), uploadDate.getDate(), uploadDate.getHours(), uploadDate.getMinutes(), uploadDate.getSeconds())
  const date = dateFormat(now, "mmmm dS, yyyy, h:MM TT");
  return date.toString()
}

export const formatLongDate = (epoch) => {
  const uploadDate = new Date(epoch * 1000)
  let date = intlFormat(new Date(uploadDate.getFullYear(), uploadDate.getMonth(), uploadDate.getDate(), uploadDate.getHours(), uploadDate.getMinutes(), uploadDate.getSeconds()), {
     year: 'numeric',
     weekday: 'long',
     month: 'long',
     day: 'numeric',
     hour: 'numeric',
 })
 return date.toString()
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
