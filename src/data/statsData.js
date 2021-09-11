import React from "react";
import {GiEarthAmerica} from "react-icons/gi";
import {MdAirplanemodeActive, MdTimer} from "react-icons/md";
import {FaMoneyCheck} from "react-icons/fa";

export const statsData = [
    {
        id: 1,
        icon: <GiEarthAmerica />,
        iconColor: "#047bf1",
        title: "Путешествия в любую точку планеты",
        desc: "Путешествия в любую точку планеты, в любое время",
    },
    {
        id: 2,
        icon: <MdAirplanemodeActive />,
        iconColor: "#f3a82e",
        title: "Вылет уже сегодня",
        desc: "Никаких недельных задержек",
    },
    {
        id: 3,
        icon: <MdTimer />,
        iconColor: "#f34f23",
        title: "Быстрая служба поддержки",
        desc: "Доступ 24/7",
    },
    {
        id: 4,
        icon: <FaMoneyCheck />,
        iconColor: "#3af576",
        title: "Оптимальные цены",
        desc: "Мы предлагаем лучшие цены",
    },
];
