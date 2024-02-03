import { Button, Tooltip, Icon, useDisclosure, Box } from "@chakra-ui/react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useRef } from "react";
interface ICommonTip {
  description: any;
  color?: string;
}

export const CommonToolTip = ({ description, color = "fontColor.400" }: ICommonTip) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const timerRef = useRef();

  return (
    <Tooltip
      label={
        <Box
          bg={"#fff"}
          color="#787878"
          borderRadius={6}
          padding={"8px 16px"}
          onMouseEnter={() => {
            clearTimeout(timerRef.current);
            onOpen();
          }}
          onMouseLeave={onClose}
        >
          {description}
        </Box>
      }
      bg={"#fff"}
      borderRadius={6}
      placement="top"
      padding={0}
      pointerEvents={"all"}
      closeOnScroll={true}
      isOpen={isOpen}
    >
      <Button
        size={"sm"}
        className="button-text -ml-1"
        onMouseEnter={onOpen}
        onMouseLeave={() => {
          //@ts-ignore
          timerRef.current = setTimeout(() => {
            onClose();
          }, 300);
        }}
      >
        <Icon as={AiFillQuestionCircle} className="cursor-pointer font-16" color={color} />
      </Button>
    </Tooltip>
  );
};

export const CollateralRatio = () => {
  return (
    <span>
      Collateral ratio
      <CommonToolTip
        description={
          <div>
            <ul>
              <li>During normal operation, the Minimum Collateral Ratio is 115%. </li>
              <li>
                However, it is recommended to keep the Collateral Ratio above 150% at all times to
                avoid liquidation under Recovery Mode.{" "}
              </li>
              <li>For additional safety, a Collateral Ratio above 200% or 250% is recommended.</li>
            </ul>
          </div>
        }
      />
    </span>
  );
};

interface IBorrowingFee {
  percentage: string;
}

export const BorrowingFee = ({ percentage }: IBorrowingFee) => {
  return (
    <span>
      Minting Fee({percentage}%)
      <CommonToolTip description="This amount is deducted from the borrowed amount as a one-time fee. There are no recurring fees for borrowing, which is thus interest-free." />
    </span>
  );
};
