import { useRouter } from "next/navigation";
import { createDndForm } from "../actions/createDndForm";
import toast from "react-hot-toast";
import { saveDndForm } from "@/actions/saveDndForm";
import { FlowerElementInstance } from "@/app/components/FormElements/FormElements";
import { FormFlowerInstance } from "@/app/components/ShelfBuilderElements";

const useDndForm = ({
  name,
  id,
  content,
}: {
  name: string;
  id?: string;
  content?: FormFlowerInstance[];
}) => {
  const router = useRouter();
  const submit = async () => {
    try {
      const dndFormId = await createDndForm({ name });
      toast.success(`${name} created!`);
      return router.push(`customizations/builder/${dndFormId}`);
    } catch (err) {
      throw new Error(err);
    }
  };

  const saveShelf = async () => {
    const contentAsString = JSON.stringify(content);
    console.log("contentAsString", contentAsString);
    try {
      const dndFormId = await saveDndForm({
        name,
        id,
        content: contentAsString,
      });

      return toast.success(`${name} saved!`);
    } catch (err) {
      throw new Error(err);
    }
    debugger;
  };

  return { submit, saveShelf };
};

export default useDndForm;
