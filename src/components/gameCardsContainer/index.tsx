import React from 'react';
import Card from 'src/shared/card';
import styles from 'styles/Home.module.css';

const GameCardsContainer = ({ data }: any) => {
  return (
    <div className={styles.grid}>
      {data?.map((item: any) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GameCardsContainer;
