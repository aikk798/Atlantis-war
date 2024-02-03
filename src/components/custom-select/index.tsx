import { Select, chakraComponents } from "chakra-react-select";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Icon } from "@chakra-ui/react";

interface IProps {
  options: any;
  value: any;
  onChange: any;
  fontSize?: number;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  fontSize = 16,
}: IProps) {
  return (
    <Select
      isSearchable={false}
      value={value}
      size={"sm"}
      focusBorderColor="rgba(255, 255, 255, 0.25)"
      onChange={onChange}
      useBasicStyles
      components={{
        DropdownIndicator: (props: any) => (
          <chakraComponents.DropdownIndicator
            {...props}
            style={{ marginRight: "0" }}
          >
            <Icon
              as={MdKeyboardArrowDown}
              w={5}
              h={5}
              color={"fontColor.100"}
            />
          </chakraComponents.DropdownIndicator>
        ),
      }}
      chakraStyles={{
        control: (provided: any) => ({
          ...provided,
          borderRadius: 100,
          _focusVisible: {
            borderWidth: 1,
          },
        }),
        valueContainer: (provided: any) => ({
          ...provided,
          fontSize: fontSize,
          fontWeight: "bold",
          color: "#3B454E",
          caretColor: "transparent",
          cursor: "pointer",
          padding: "0",
        }),
        menuList: (provided: any) => ({
          ...provided,
          background: "#fff",
          borderRadius: "8px",
          padding: "4px",
        }),
        option: (provided: any, state: any) => ({
          ...provided,
          backgroundColor: state.isSelected ? "#e6f5ff" : "transparent",
          color: state.isSelected ? "#000" : "#3B454E",
          borderRadius: "4px",
          marginBottom: "2px",
          _hover: {
            backgroundColor: "#f5f5f5",
          },
        }),
      }}
      options={options}
    />
  );
}
