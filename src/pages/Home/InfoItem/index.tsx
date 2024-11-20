import { Icon } from "phosphor-react";
import { useTheme } from "styled-components";
import { InfoItemContainer } from "./styles";

interface InfoItemProps {
  icon: Icon;
  text: string;
  backgroundColor: string;
}

const InfoItem = ({ icon, text, backgroundColor }: InfoItemProps) => {
  const theme = useTheme();

  const Icon = icon;

  return (
    <InfoItemContainer>
      <Icon
        size={32}
        weight="fill"
        color={theme.colors.background}
        style={{ backgroundColor }}
      />
      <span>{text}</span>
    </InfoItemContainer>
  );
};

export default InfoItem;
