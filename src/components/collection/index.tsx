
import React, { useContext } from 'react'
import { Grid, Typography, Divider } from '@mui/material'

import { AuthContext } from 'src/contexts/AuthContext';
import { GiveAwaysContext } from 'src/contexts/GiveAwaysContext';
import GameCardsContainer from 'src/components/gameCardsContainer';
// import { authUser } from 'src/utils/auth';

const Collection = () => {

    const { loggedInUser, setLoggedInUser }: any = useContext(AuthContext)
    const { giveAways } = useContext(GiveAwaysContext)


    // useEffect(() => {
    // const runCode = async () => {
    //     const { email, password } = loggedInUser;
    //     if (email && password) {
    //         const data = await authUser(email, password);
    //         setLoggedInUser(data);
    //     }
    // }
    // runCode()
    // }, [setLoggedInUser])

    const filterFavoriteData = (data: any, user: any) => {
        const { collection } = user;
        data = data?.filter((item: any) => collection?.some((c: number) => c === item.id))
        return data
    }

    const filterRemainingData = (data: any, user: any) => {
        const { collection } = user;
        if (collection?.length) {
            data = data?.filter((item: any) => !(collection?.some((c: number) => c === item.id)))
        }
        return data;
    }
    const data = filterFavoriteData(giveAways, loggedInUser)
    const remainingData = filterRemainingData(giveAways, loggedInUser)

    return (
        <Grid>
            <Grid>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: '10px', textAlign: !data.length ? 'center' : '' }}
                >
                    My Collection
                </Typography>
                {!data.length ? <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ mt: '10px', textAlign: 'center' }}
                >
                    There is no record in my collection
                </Typography> :
                    <GameCardsContainer data={data} />}
            </Grid>
            <Grid>
                <Divider sx={{ m: '10px' }} />
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mt: '10px', textAlign: 'center' }}
                >
                    Giveaways you might like
                </Typography>
                {!remainingData.length ? <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ mt: '10px', textAlign: 'center' }}
                >
                    There is no record in my collection
                </Typography> :
                    <GameCardsContainer data={remainingData} />}
            </Grid>
        </Grid>
    )
}

export default Collection