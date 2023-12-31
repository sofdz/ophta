import { useState, useEffect } from "react";
import { Dialog, Typography, Grid, Button } from '@mui/material'


export default function SupprimerActe({ selected, deleting, setDeleting }) {
    const handleConfirmDelete = () => {
        fetch('https://ophtaback.onrender.comactes/', {
            method: 'DELETE',
            body: JSON.stringify(selected),
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(e => {
            console.log(e)
            window.location.reload()
        }).catch(e => {
            console.log(e)
        })

    }
    return (
        <div>
            <Dialog on PaperProps={{ sx: { alignItems: 'center', minHeight: '135px', minWidth: '400px' } }} open={deleting}>
                <Typography sx={{ m: 2, alignSelf: 'center' }} variant='overline' >Voulez vous supprimer ({selected.length}) acte(s) séléctionné(s)?</Typography>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={5} sx={{ m: 1, alignSelf: 'center', alignItems: 'center', display: 'grid' }} >
                        <Button variant='outlined' onClick={() => { setDeleting(false) }}>Non</Button >
                    </Grid>
                    <Grid item xs={5} sx={{ m: 1, alignSelf: 'center', alignItems: 'center', display: 'grid' }}>
                        <Button variant='outlined' color='error' onClick={handleConfirmDelete}>Oui</Button>
                    </Grid>
                </Grid>
            </Dialog>
        </div>)
}