export const showModal = (setIsModalOpen) => {
  console.log(1);

  setIsModalOpen(true);
};
export const ok = (setIsModalOpen) => {
  console.log(123);
  setIsModalOpen(false);
};
export const cancel = (setIsModalOpen) => {
  setIsModalOpen(false);
};
