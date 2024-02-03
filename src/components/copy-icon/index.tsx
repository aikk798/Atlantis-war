import React from "react";
import { RiFileCopy2Line } from "react-icons/ri";
import { Icon, Tooltip, useClipboard, Button } from "@chakra-ui/react";

interface IProps {
  value: string | any;
  description?: string;
  style?: any;
  className?: string;
  tooltipStyle?: any;
}

const CopyIcon = ({
  value,
  style,
  className,
  description,
  tooltipStyle,
}: IProps) => {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Tooltip
      label={
        hasCopied ? <span className="text-green-400">Copied!</span> : "Copy"
      }
      bg="#10161B"
      color="#fff"
      borderRadius="8"
      placement="top"
      hasArrow
      closeOnClick={false}
      style={tooltipStyle}
    >
      <span className={className}>
        <Button
          size={"sm"}
          className={"button-text"}
          onClick={onCopy}
          color="fontColor.300"
        >
          <Icon as={RiFileCopy2Line} w={4} h={4} className="cursor-pointer" />
          {description && <span className="ml-1">{description}</span>}
        </Button>
      </span>
    </Tooltip>
  );
};

export default CopyIcon;
