import React from 'react';
import { Link, Grid } from '@mui/material';
import Search from '../../components/Search/Search';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import image1 from '../../assets/book1.png';
import { ChevronLeftStyle, BackTextStyle } from './BookDetailsPage.style';
import BookDetails from '../../components/Books/Book_Details/BookDetails';

export default function BookDetailsPage() {
  const details = [
    {
      image: image1,
      bookTitle:
        "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
      authorName: 'Steve Krug',
      Published: 'New Riders: United States.December 2013',
      Description:
        'Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject.Now Steve returns with fresh perspective to reexamine the principles that made Don’t Make Me Think a classic–with updated examples and a new chapter on mobile usability. And it’s still short, profusely illustrated…and best of all–fun to read. If you’ve read it before, you’ll rediscover what made Don’t Make Me Think so essential to Web designers and developers around the world. If you’ve never read it, you’ll see why so many people have said it should be required reading for anyone working on Web sites.',
      Chapters: [
        { chapterNumber: 'Chapter 1: ', chapterTitle: 'Don’t make me think!' },
        {
          chapterNumber: 'Chapter 2: ',
          chapterTitle: 'How we really use the Web'
        },
        { chapterNumber: 'Chapter 3: ', chapterTitle: 'Billboard Design 101' },
        {
          chapterNumber: 'Chapter 4: ',
          chapterTitle: 'Animal, vegetable, or mineral?'
        },
        { chapterNumber: 'Chapter 5: ', chapterTitle: 'Omit needless words' }
      ]
    }
  ];

  return (
    <>
      <NavigationBar />
      <Search />
      <Grid sx={{ display: 'flex', marginTop: '10px' }}>
        <ChevronLeftStyle />
        <Link href="/" sx={{ textDecoration: 'none' }}>
          <BackTextStyle>Back to Results</BackTextStyle>
        </Link>
      </Grid>

      <BookDetails details={details[0]} />
    </>
  );
}
