import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { getUniqueArray } from 'src/utils/uniqueArray'
import { FilterContext } from 'src/contexts/FilterContext';
import axios from 'axios';

import GameCardsContainer from '../gameCardsContainer';
import Filters from '../filters';

const Dashboard = () => {

  const { type, name, platForm } = useContext(FilterContext)

  const options = {
    method: 'GET',
    // GET https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity

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
        return response.data;
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
    array = data.filter((item: any) => item.type.toLowerCase().includes(type.toLowerCase()) && item.platforms.toLowerCase().includes(platForm.toLowerCase()) && item.title.toLowerCase().includes(name.toLowerCase()))
    return array
  }
  return (
    <>
      <Filters typeArray={typeArray} />
      <GameCardsContainer data={filterData(data)} />
    </>
  );
};

export default Dashboard;
