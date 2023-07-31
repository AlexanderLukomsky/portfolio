import { SkillsItem } from "./SkillsItem.tsx/SkillsItem";
import { useCallback, useEffect, useRef } from "react";
import { setIsShowScrollElem } from "../../store/appReducer";
import { useSelector } from "react-redux";
import { selectSkills } from "../../utils";
import { useAppDispatch } from "../../store";
import { Title } from "components/title";
import "./skills.scss";

export const Skills = () => {
  const skills = useSelector(selectSkills);
  const skillsRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const showBtnHandler = useCallback(() => {
    if (skillsRef.current) {
      if (window.scrollY >= skillsRef.current.offsetTop) {
        dispatch(setIsShowScrollElem({ isShowScrollElem: true }));
      } else {
        dispatch(setIsShowScrollElem({ isShowScrollElem: false }));
      }
    }
  }, [dispatch]);
  useEffect(() => {
    window.addEventListener("scroll", showBtnHandler);
    return () => {
      window.removeEventListener("scroll", showBtnHandler);
    };
  }, [showBtnHandler]);

  return (
    <section className="skills blockPadding" id="skills" ref={skillsRef}>
      <div className="container">
        <Title text="my skills" />
        <ul className="skills__list">
          {skills.map((el) => (
            <SkillsItem key={el.id} logoImg={el.img} text={el.skill} />
          ))}
        </ul>
      </div>
    </section>
  );
};
