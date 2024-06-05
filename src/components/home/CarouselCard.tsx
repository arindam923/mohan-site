'use client'

import React from 'react';
import { motion } from 'framer-motion';

const cards = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Google" },
    { id: 3, name: "Microsoft" },
    { id: 4, name: "Amazon" },
    { id: 5, name: "Facebook" },
];

const Carousel = () => {



    return (
        <div className="flex overflow-hidden">
            {cards.map((card, index) => (
                <motion.div
                    key={card.id}
                    className="min-w-[200px] m-4 p-4 border border-neutral-800 bg-neutral-900 rounded-lg shadow-md text-center"
                    whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                >
                    <motion.div
                        className="text-xs"
                        whileHover={{ color: "#000" }}
                    >
                        {card.name}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default Carousel;
