import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import { getUniqueArray } from 'src/utils'
import { FilterContext } from 'src/contexts/FilterContext';
import { GiveAwaysContext } from 'src/contexts/GiveAwaysContext';

import Filters from 'src/components/filters';
import GameCardsContainer from 'src/components/gameCardsContainer';

const Dashboard = () => {

  const { type, name, platForm } = useContext(FilterContext)
  const { giveAways, setGiveAways } = useContext(GiveAwaysContext)

  const options = {
    method: 'GET',
    url: `https://gamerpower.p.rapidapi.com/api/giveaways`,
    headers: {
      'X-RapidAPI-Key': '965f6d1f32mshf4a14ac7d5ca9fap1bb69djsnf72a39ceb0ac',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
    },
  };

  const { isLoading, error, data } = useQuery(['getAllData'], () =>
    axios
      .request(options)
      .then((response) => {
        let { data } = response

        setGiveAways(data)
        return data;
      })
      .catch(function (error) {
        console.error(error);
      })
  );


  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: </>;
  const typeArray: string[] = getUniqueArray(data, 'type')

  const filterData = (data: any) => {
    let array: any = []
    array = data?.filter((item: any) => item.type.toLowerCase().includes(type.toLowerCase()) && item.platforms.toLowerCase().includes(platForm.toLowerCase()) && item.title.toLowerCase().includes(name.toLowerCase()))
    return array
  }

  return (
    <>
      <Filters typeArray={typeArray} />
      <GameCardsContainer data={filterData(giveAways)} />
    </>
  );
};

export default Dashboard;
