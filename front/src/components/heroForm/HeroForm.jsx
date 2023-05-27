import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import css from "./styles.module.css";
import {
  useAddNewHeroMutation,
  useUpdateHeroMutation,
  useUploadImgMutation,
  useLazyGetHeroByIdQuery,
} from "../../redux/heroesAPI";

//Components
import { ImgList } from "../imgList/ImgList";
import { MainButton } from "../mainButton/MainButton";

export const HeroForm = ({ onClose, heroId, isOpenModal, resetId }) => {
  const [addNewHero] = useAddNewHeroMutation();
  const [updateHero] = useUpdateHeroMutation();
  const [getHeroById, { data: heroData }] = useLazyGetHeroByIdQuery();
  const [uploadImg, { data }] = useUploadImgMutation();
  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [description, setDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [file, setFile] = useState(null);
  const [imgSet, setImgSet] = useState([]);
  const [isFormValid, setIsFormValid] = useState(true);

  const heroObject = {
    nickname,
    realName,
    description,
    superpowers,
    catchPhrase,
    imgSet,
  };

  const resetForm = () => {
    setNickname("");
    setRealName("");
    setDescription("");
    setSuperpowers("");
    setCatchPhrase("");
    setImgSet([]);
  };

  useEffect(() => {
    if (heroId) {
      getHeroById(heroId);
    }
  }, [heroId, getHeroById]);

  useEffect(() => {
    if (!isOpenModal) {
      resetForm();
    }
  }, [isOpenModal]);

  useEffect(() => {
    if (heroData) {
      const {
        catchPhrase,
        description,
        imgSet,
        nickname,
        realName,
        superpowers,
      } = heroData;
      setNickname(nickname);
      setRealName(realName);
      setDescription(description);
      setSuperpowers(superpowers);
      setCatchPhrase(catchPhrase);
      setImgSet(imgSet);
    }
  }, [heroData]);

  const handlUploadImg = (e) => {
    e.preventDefault();
    const imgData = new FormData();
    imgData.append("img", file);
    uploadImg(imgData);
    document.getElementById("img").value = "";
    setFile(null);
  };

  useEffect(() => {
    if (data) {
      setImgSet((prev) => [...prev, data]);
    }
  }, [data]);

  const handleSubmit = async () => {
    if (
      nickname.trim() !== "" &&
      realName.trim() !== "" &&
      description.trim() !== "" &&
      superpowers.trim() !== "" &&
      catchPhrase.trim() !== ""
    ) {
      setIsFormValid(true);
      if (heroId) {
        try {
          const res = await updateHero({
            heroObject,
            heroId,
          });
          if (res.error) {
            throw new Error(res.error);
          }
          toast.success("Superhero updated");
        } catch (error) {
          toast.error("Something went wrong");
        }
      } else {
        try {
          const res = await addNewHero(heroObject);
          if (res.error) {
            throw new Error(res.error);
          }
          toast.success("Superhero created");
        } catch (error) {
          toast.error("Something went wrong");
        }
      }
      resetId();
      resetForm();
      onClose();
    } else {
      setIsFormValid(false);
    }
  };

  const handleDelImg = (item) => {
    const result = imgSet.filter((el) => el !== item);
    setImgSet(result);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.formsWrap}>
          <form autoComplete="off" className={css.form}>
            <div>
              <label htmlFor="nickname">Nickname</label>
              <input
                required
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="realName">Real name</label>
              <input
                required
                type="text"
                id="realName"
                value={realName}
                onChange={(e) => setRealName(e.target.value)}
              />
            </div>
            <div className={css.textareaWrap}>
              <label htmlFor="description">Description</label>
              <textarea
                required
                multiple={true}
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="superpowers">Superpowers</label>
              <textarea
                required
                type="text"
                id="superpowers"
                value={superpowers}
                onChange={(e) => setSuperpowers(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="catchPhrase">Catch phrase</label>
              <textarea
                required
                type="text"
                id="catchPhrase"
                value={catchPhrase}
                onChange={(e) => setCatchPhrase(e.target.value)}
              />
            </div>
          </form>
          <form
            encType="multipart/form-data"
            className={css.imgLoadForm}
            onSubmit={handlUploadImg}
          >
            <div>
              <label htmlFor="img">Choose image</label>
              <input
                name="img"
                type="file"
                id="img"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className={css.btnWrap}></div>
            <button disabled={!file} className={css.sbmBtn} type="submit">
              Upload
            </button>
          </form>
        </div>
        <div>
          <p className={css.imgTitle}>Superhero images</p>
          {imgSet.length !== 0 ? (
            <ImgList onDelImg={handleDelImg} imgSet={imgSet} />
          ) : (
            <p>No images yet. Upload, please!</p>
          )}
        </div>
      </div>
      <div>
        <div onClick={handleSubmit}>
          <MainButton>Save</MainButton>
        </div>
        {!isFormValid && <p className={css.invalidMsg}>Fill all fields!</p>}
      </div>
    </>
  );
};
