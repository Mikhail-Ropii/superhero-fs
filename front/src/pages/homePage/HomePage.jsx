import { useState } from "react";
import { toast } from "react-toastify";
import css from "./styles.module.scss";
//Components
import { MainButton } from "../../components/mainButton/MainButton";
import { Modal } from "../../components/modal/Modal";
import { AddHeroForm } from "../../components/addHeroForm/AddHeroForm";
import { EditHeroForm } from "../../components/editHeroForm/EditHeroForm";
import { HeroList } from "../../components/heroList/HeroList";

import {
  useGetAllHeroesQuery,
  useRemoveHeroMutation,
} from "../../redux/heroesAPI";
import { Pagination } from "../../components/pagination/Pagination";

export const HomePage = () => {
  const [isAddModalOpen, setisAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
    setIsEditModalOpen(true);
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
      <div className={css.btnWrap}>
        <MainButton onClick={() => setisAddModalOpen(true)}>
          Add Superhero
        </MainButton>
      </div>
      <Modal isOpen={isAddModalOpen} onClose={() => setisAddModalOpen(false)}>
        <AddHeroForm
          onClose={setisAddModalOpen}
          isOpenModal={isAddModalOpen}
          heroId={idForEditing}
        />
      </Modal>
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <EditHeroForm
          onClose={setIsEditModalOpen}
          isOpenModal={isEditModalOpen}
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

      <Pagination
        onPagePlus={pagePlus}
        onPageMinus={pageMinus}
        hasMore={hasMore}
        page={page}
      />
    </>
  );
};
