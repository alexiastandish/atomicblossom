import { useRouter } from "next/navigation";
import { createDndForm } from "../actions/createDndForm";
import toast from "react-hot-toast";

const useDndForm = ({ name }) => {
  const router = useRouter();
  const submit = async () => {
    try {
      const dndFormId = await createDndForm({ name });
      toast.success(`${name} created!`);
      return router.push(`customizations/builder/${dndFormId}`);

      console.log("dndFormId", dndFormId);
    } catch (err) {
      throw new Error(err);
    }
  };

  return [submit];
};

export default useDndForm;
