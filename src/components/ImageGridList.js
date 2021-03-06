import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1500,
        height: 700,
    },
}));

export default function ImageGridList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {props.images.map((tile) => (
                    <GridListTile key={tile.id} cols={1}>
                        <img src={tile.urls.regular} alt='' />
                    </GridListTile>
                ))}
            </GridList>
        </div >
    );
}




