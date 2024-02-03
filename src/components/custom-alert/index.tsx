import { Alert, AlertIcon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ImBullhorn } from "react-icons/im";
import { MdWarning } from "react-icons/md";

interface IProps {
  content: string | ReactNode;
}

export const SuccessAlert = ({ content }: IProps) => {
  return (
    <Alert status="success" size={"sm"} className="custom-alert success" py={2}>
      <AlertIcon color={"#82D20F"} fontSize={16} />
      {content}
    </Alert>
  );
};

export const InfoAlert = ({ content }: IProps) => {
  return (
    <Alert status="info" size={"sm"} className="custom-alert info" py={2}>
      <ImBullhorn color={"#448EF7"} fontSize={20} className="mr-2" />
      {content}
    </Alert>
  );
};

export const ErrorAlert = ({ content }: IProps) => {
  return (
    <Alert status="error" size={"sm"} className="custom-alert error" py={2}>
      <MdWarning color={"#F24E1E"} fontSize={16} className="mr-2" />
      {content}
    </Alert>
  );
};
