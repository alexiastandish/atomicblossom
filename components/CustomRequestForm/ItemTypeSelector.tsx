import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./CustomRequestForm.module.scss";
import { useController, useFormContext } from "react-hook-form";

export default function ItemTypeSelector() {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: "type",
    control,
    rules: { required: true },
  });

  return (
    <div className="">
      <RadioGroup.Root
        value={field.value}
        className={`${styles.RadioGroupRoot} grid grid-cols-4`}
        aria-label="View density"
        onValueChange={(option) => field.onChange(option)}
      >
        <div className={styles.radioGroupSection}>
          <RadioGroup.Item
            className={styles.RadioGroupItem}
            value="NECKLACE"
            id="rNecklace"
          >
            <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className="Label" htmlFor="rNecklace">
            Necklace
          </label>
        </div>
        <div className={styles.radioGroupSection}>
          <RadioGroup.Item
            className={styles.RadioGroupItem}
            value="BRACELET"
            id="rBracelet"
          >
            <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className="Label" htmlFor="rBracelet">
            Bracelet
          </label>
        </div>
        <div className={styles.radioGroupSection}>
          <RadioGroup.Item
            className={styles.RadioGroupItem}
            value="EARRINGS"
            id="rEarrings"
          >
            <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className="Label" htmlFor="rEarrings">
            Earrings
          </label>
        </div>
        <div className={styles.radioGroupSection}>
          <RadioGroup.Item
            className={styles.RadioGroupItem}
            value="OTHER"
            id="rOther"
          >
            <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className="Label" htmlFor="rOther">
            Other
          </label>
        </div>
      </RadioGroup.Root>
    </div>
  );
}
