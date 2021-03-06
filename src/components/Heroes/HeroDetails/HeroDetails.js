import React, { useState, useEffect } from "react";
import HeroHeaderTile from "./HeroHeaderTile";
import HeroWinRateTile from "./HeroWinRateTile";


const getHeroPrimaryBaseStat = heroSelected => {
  if (heroSelected.primary_attr === "agi") {
    return heroSelected.base_agi;
  } else if (heroSelected.primary_attr === "int") {
    return heroSelected.base_int;
  } else if (heroSelected.primary_attr === "str") {
    return heroSelected.base_str;
  }
};
// str = fuerza, agi = agilidad, int = inteligencia


//Características de cada uno de los personajes que aparecerán en la app
const getHeroStats = heroSelected => {

  //Acá coloco un string vacío que será completado con los stats que posee la base de datos.
  let heroImage = "--";
  let heroBaseAttackMin = "--";
  let heroBaseAttackMax = "--";
  let heroMoveSpeed = "--";
  let heroAttackRange = "--";
  let heroAttackRate = "--";
  let heroWinRate = "--";
  let heroColor = "grey";
  let heroName = "--";
  let heroRoles = ["--"];
  let heroBaseInt = "--";
  let heroBaseStr = "--";
  let heroBaseAgi = "--";
  let heroIntGain = "--";
  let heroStrGain = "--";
  let heroAgiGain = "--";
  if (heroSelected) {
    //Exportamos la imagen desde dota2
    heroImage = `http://cdn.dota2.com/${heroSelected.img}`;
    heroBaseAttackMin =
      heroSelected.base_attack_min + getHeroPrimaryBaseStat(heroSelected);
    heroBaseAttackMax =
      heroSelected.base_attack_max + getHeroPrimaryBaseStat(heroSelected);
    heroMoveSpeed = heroSelected.move_speed;
    heroAttackRange = heroSelected.attack_range;
    heroAttackRate = heroSelected.attack_rate;
    heroWinRate = Math.round(
      (heroSelected.pro_win / heroSelected.pro_pick) * 100
    );
    if (heroSelected.primary_attr === "str") {
      heroColor = `rgb( 255, 121,121)`;
    } else if (heroSelected.primary_attr === "agi") {
      heroColor = `rgb( 121, 255,121)`;
    } else if (heroSelected.primary_attr === "int") {
      heroColor = `rgb( 121, 121,255)`;
    }

    
    heroName = heroSelected.localized_name;
    heroRoles = heroSelected.roles;
    heroBaseInt = heroSelected.base_int;
    heroBaseStr = heroSelected.base_str;
    heroBaseAgi = heroSelected.base_agi;
    heroIntGain = heroSelected.int_gain;
    heroStrGain = heroSelected.str_gain;
    heroAgiGain = heroSelected.agi_gain;
  }

  //Acá me returna los stats seleccionados con las características extraídas de la API.
  return {
    heroImage,
    heroBaseAttackMin,
    heroBaseAttackMax,
    heroMoveSpeed,
    heroAttackRange,
    heroAttackRate,
    heroWinRate,
    heroColor,
    heroName,
    heroRoles,
    heroBaseInt,
    heroBaseStr,
    heroBaseAgi,
    heroIntGain,
    heroStrGain,
    heroAgiGain
  };
};


//Esto me da la imagen del heroe en el panel izquierdo de la pantalla
const renderHeroImage = heroImage => {
  if (heroImage !== "--") {
    return (
     
      <img
        style={{
          width: "170px",
          height: "95px",
          borderRadius: "5px"
        }}
        src={heroImage}
        alt="hero"
      />
    );
  } else {
    return (
      <span
        style={{
          width: "150px",
          height: "85px",
          borderRadius: "5px"
        }}
      >
        {heroImage}
      </span>
    );
  }
};


//Acá se refleja los stats seleccionados del campeón.
const HeroDetails = props => {
  const { heroSelected } = props;
  const values = getHeroStats(heroSelected);
  const {
    heroImage,
    heroBaseAttackMin,
    heroBaseAttackMax,
    heroMoveSpeed,
    heroAttackRange,
    heroAttackRate,
    heroWinRate,
    heroColor,
    heroName,
    heroRoles,
    heroBaseInt,
    heroBaseStr,
    heroBaseAgi,
    heroIntGain,
    heroStrGain,
    heroAgiGain
  } = values;

  const HeaderProps = {
    heroImage: renderHeroImage(heroImage),
    heroBaseAttackMin,
    heroBaseAttackMax,
    heroMoveSpeed,
    heroAttackRange,
    heroAttackRate,
    heroName,
    heroRoles,
    heroBaseInt,
    heroBaseStr,
    heroBaseAgi,
    heroIntGain,
    heroStrGain,
    heroAgiGain
  };

  const WinRateProps = {
    heroWinRate,
    heroColor
  };

  return (
    <div className={props.className}>
      <div className="row" style={{ paddingTop: "5x" }}>
        <HeroWinRateTile {...WinRateProps} />
        <HeroHeaderTile {...HeaderProps} />
        
      </div>
      <div className="row" style={{ paddingTop: "5x" }} />
    </div>
  );
};

export default HeroDetails;
