import { toast, ToastOptions } from "react-toastify";
import { MdHighlightOff, MdOutlineCheckCircleOutline } from "react-icons/md";

const USER_DENIED_TRANSACTION = "You denied transaction.";

const toastConfig: ToastOptions = {
  position: "bottom-left",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  className: "toast-message",
};

export const errorToast = (text: any) => {
  return toast.error(text, {
    ...toastConfig,
    icon: <MdHighlightOff color="#FF375F" fontSize={22} />,
  });
};

export const successToast = (text: any) => {
  return toast.success(text, {
    ...toastConfig,
    icon: <MdOutlineCheckCircleOutline color="#30D158" fontSize={22} />,
  });
};

export const contractErrorToast = (e: any) => {
  console.log("===chain err===", e);
  const msg = e.message || "";

  const start = msg.indexOf('(reason="');
  const end = msg.indexOf('", method="');

  //用户拒绝请求
  if (
    msg.indexOf("User denied") > -1 ||
    msg.indexOf("user rejected transaction") > -1
  ) {
    errorToast(USER_DENIED_TRANSACTION);
  } else if (start > -1 && end > -1) {
    errorToast(msg.slice(start + 9, end));
  } else {
    errorToast(msg);
  }
};
