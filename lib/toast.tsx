
import { CustomToast } from "@/components/ui/CustomToast";
import toast from "react-hot-toast";


export const showToast = {
  success: (message: string) =>
    toast.custom((t) => (
      <CustomToast t={t} type="success" message={message} />
    )),

  error: (message: string) =>
    toast.custom((t) => (
      <CustomToast t={t} type="error" message={message} />
    )),
};
