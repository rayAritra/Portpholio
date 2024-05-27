import React from 'react';
import styles from './SkillsStyles.module.css'; 
import checkmarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="HTML"/>
        <SkillList src={checkmarkIcon} skill="CSS"/>
        <SkillList src={checkmarkIcon} skill="JavaScript"/>
        <SkillList src={checkmarkIcon} skill="Node Js"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="React"/>
        <SkillList src={checkmarkIcon} skill="Three-js"/>
        <SkillList src={checkmarkIcon} skill="TailWind Css"/>
        <SkillList src={checkmarkIcon} skill="Express"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="GitHub"/>
        <SkillList src={checkmarkIcon} skill="Vs-Code"/>
        <SkillList src={checkmarkIcon} skill="Java"/>
        <SkillList src={checkmarkIcon} skill="c"/>
      </div>
    </div>
  );
}

export default Skills;
