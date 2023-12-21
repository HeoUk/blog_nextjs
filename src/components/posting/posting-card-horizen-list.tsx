import Button from '@mui/material/Button/Button';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import {Grid} from '@mui/material';

export default function PostingCardHorizenList({
  children,
}: {
  children: React.ElementType[];
}) {
  //
  const [postingBundle, setPostingBundle] = useState(
    [] as React.ElementType[][]
  );

  useEffect(() => {
    let postingBundle: React.ElementType[][] = [];

    const bundleSize = children.length > 4 ? children.length / 4 : 0;
    for (let i = 0; i <= bundleSize; i++) {
      const tail = ((i * 4) + 4 ) >= children.length ? children.length : ((i * 4) + 4);
      postingBundle.push(children.slice(i * 4, tail));
    }

    setPostingBundle(postingBundle);
  }, [children]);

  return (
    <>
      <Carousel
        autoPlay
        animation='slide'
        NavButton={({ onClick, className, style, next, prev }) => {
          // Other logic

          return (
            <></>
            // <Button
            //   onClick={onClick}
            //   className={className}
            //   style={{
            //     height: '100%',
            //     backgroundColor: 'lightgrey',
            //     color: 'black',
            //     opacity: '0.8',
            //     maxWidth: '15px',
            //   }}
            // >
            //   {next && '>'}
            //   {prev && '<'}
            // </Button>
          );
        }}
      >
        {postingBundle.map((bundle) => (
          <Grid container spacing={2}>
            {bundle.map((item: any) => (
              <Grid item xs={3}>
                {item}
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </>
  );
}
