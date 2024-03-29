import { Star } from "assets";
import styles from "./styles.module.scss";
import { Button } from "components";

interface ConfirmationProps {
  isSuccess: boolean;
  text: string;
  handleBack: () => void;
  buttonText: string;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  isSuccess,
  text,
  buttonText,
  handleBack,
}) => {
  return (
    <section className={styles.container}>
      <Star />
      <h2>{isSuccess ? "Congratulations" : "Oops"}</h2>
      <p>{isSuccess ? text : ` Something Went Wrong!`}</p>
      <Button
        text={buttonText}
        available={"open"}
        onClick={handleBack}
        className={styles.submitBtn}
      />
    </section>
  );
};

export { Confirmation };
