import { toast, ToastOptions } from "react-toastify";
import { MdHighlightOff, MdOutlineCheckCircleOutline } from "react-icons/md";

const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
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
