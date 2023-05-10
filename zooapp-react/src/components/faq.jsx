import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "Who is Justin",
            content: `A little wads`,
        },
        {
            title: "Why this page",
            content:
                "cuz its cool",
        },
        {
            title: "Where do i buy a Ticket for multible people",
            content: `ask Justin`,
        },
        {
            title: "Can i have the git for this page",
            content: "no",
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "white",
    rowTitleColor: "white",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    bgColor: "#455f94"
 
};

const config = {
     animate: true,
     tabFocus: true
};

export default function Help () {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
            />
        </div>
    );
}