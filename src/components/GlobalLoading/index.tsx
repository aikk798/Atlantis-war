import styles from "./index.module.scss";
import { Spinner } from "@chakra-ui/react";
import { LogoMini } from "@/components/img-icons";
import { IAppData } from "@/slices/AppSlice";
import { useAppSelector } from "@/hook";

export default function GlobalLoading() {
  //@ts-ignore
  const { refetchGlobalLoading } = useAppSelector((state: any) => state.app as IAppData);

  if (refetchGlobalLoading) {
    return (
      <div className={styles.conponent}>
        <div className={styles.loadingWrap}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="rgba(130,210,15,0.3)"
            color="#82D20F"
            width={70}
            height={70}
          />
          <div className={styles.logo}>
            <LogoMini width={24} />
          </div>
        </div>
      </div>
    );
  }
  return null;
}
