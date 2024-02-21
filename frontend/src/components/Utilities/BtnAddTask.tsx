import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/modal.store";

export const BtnAddTask = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal}>
        New Task
      </button>
    </>
  );
};
