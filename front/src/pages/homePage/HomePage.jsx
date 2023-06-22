import { useState } from "react";
import { toast } from "react-toastify";
//Components
import { MainButton } from "../../components/mainButton/MainButton";
import { Modal } from "../../components/modal/Modal";
import { HeroForm } from "../../components/heroForm/HeroForm";
import { HeroList } from "../../components/heroList/HeroList";

import {
  useGetAllHeroesQuery,
  useRemoveHeroMutation,
} from "../../redux/heroesAPI";
import { Pagination } from "../../components/pagination/Pagination";

export const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [idForEditing, setIdForEditing] = useState(null);
  const { data } = useGetAllHeroesQuery(page);
  const [removeHero] = useRemoveHeroMutation();
  const { hasMore, result } = data ?? {};

  const pagePlus = () => {
    if (!hasMore) {
      return;
    }
    setPage((prev) => prev + 1);
  };
  const pageMinus = () => {
    if (page === 1) {
      return;
    }
    setPage((prev) => prev - 1);
  };

  const handleEditBtn = (id) => {
    setIdForEditing(id);
    setIsOpenModal(true);
  };

  const handleRemoveHero = async (id) => {
    try {
      const res = await removeHero(id);
      if (res.error) {
        throw new Error(res.error);
      }
      toast.success("Superhero deleted");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const resetId = () => {
    setIdForEditing(null);
  };

  return (
    <>
      <div>
        <MainButton onClick={() => setIsOpenModal(true)}>
          Add Superhero
        </MainButton>
      </div>
      <Modal
        resetId={resetId}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <HeroForm
          onClose={setIsOpenModal}
          isOpenModal={isOpenModal}
          heroId={idForEditing}
          resetId={resetId}
        />
      </Modal>
      {result && (
        <HeroList
          data={result}
          onEdit={handleEditBtn}
          onDelete={handleRemoveHero}
        />
      )}

      <Pagination onPagePlus={pagePlus} onPageMinus={pageMinus} />
    </>
  );
};
