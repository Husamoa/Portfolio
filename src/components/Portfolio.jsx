import React from 'react';

import RecipeReviewCard from './RecipeReviewCard'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';

const Portfolio = () => {
  return (<section>
    <main className="portfolio d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1>
              <strong>Portfolio</strong>
            </h1>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 mx-auto d-flex justify-content-center">
            <RecipeReviewCard imageURL='images/game-of-tilde/tilde-screenshot.png' title="Game Of Tilde" subheader="September 2018" logoURL="images/my-photo.jpg" GitHubURL="https://github.com/Husamoa/GameOfTilde" URL="https://husamoa.github.io/GameOfTilde/#/" abstract={`It is a final project for Coders Lab IT School.
                Rules: Tilde is a logic game in which you have to answer the questions and then you can level up.`} cardContent={<CardContent > <Typography paragraph="paragraph" component="h2" variant="h6">
                Technologies:
              </Typography>
              <Typography paragraph="paragraph">ReactJS</Typography>
              <Typography paragraph="paragraph">ES6</Typography>
              <Typography paragraph="paragraph">Sass</Typography>
              <Typography paragraph="paragraph">Firebase</Typography>
              <Typography paragraph="paragraph">Webpack</Typography>
            </CardContent>}/>
          </div>
          <div className="col-xl-6 mx-auto d-flex justify-content-center">
            <RecipeReviewCard imageURL='images/andrzejhypki/hol-uam.jpg' title="Andrzej Hypki - architect" subheader="November 2018" logoURL="images/andrzejhypki/andrzejhypki.jpg" GitHubURL="https://github.com/Husamoa/andrzej-hypki-pl" URL="http://andrzejhypki.pl/" abstract="This is page for my friend who starting up business such as architect.
          Main template: Bootstrap 4 Mazel Template" cardContent={<CardContent > <Typography paragraph="paragraph" component="h2" variant="h6">
                Technologies:
              </Typography>
              <Typography paragraph="paragraph">HTML5</Typography>
              <Typography paragraph="paragraph">Bootstrap4</Typography>
              <Typography paragraph="paragraph">CSS3</Typography>
              <Typography paragraph="paragraph">JQuery</Typography>
            </CardContent>}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 mx-auto d-flex justify-content-center">
            <RecipeReviewCard imageURL='images/news-api/news-api-photo.png' title="News API using React" subheader="September 2018" logoURL="images/my-photo.jpg" GitHubURL="https://github.com/Husamoa/newsAPI" URL="https://husamoa.github.io/newsAPI/" abstract="React APP showing news results from Poland. You can choose from 6 categories: technology, business, entertainment, health, science and sports. Uses data from News API and it's responsive thanks to Bootstrap." cardContent={<CardContent > <Typography paragraph="paragraph" component="h2" variant="h6">
                Technologies:
              </Typography>
              <Typography paragraph="paragraph">ReactJS</Typography>
              <Typography paragraph="paragraph">ES6</Typography>
              <Typography paragraph="paragraph">Bootstrap 4</Typography>
              <Typography paragraph="paragraph">Sass</Typography>
              <Typography paragraph="paragraph">NodeJS client library</Typography>
              <Typography paragraph="paragraph">Webpack</Typography>
            </CardContent>}/>
          </div>
          <div className="col-xl-6 mx-auto d-flex justify-content-center">
            <RecipeReviewCard imageURL='images/mitraposadzki/betoniara.jpg' title="MITRA - posadzki anhydrytowe" subheader="September 2018" logoURL="images/mitraposadzki/mitra_log.jpg" GitHubURL="https://github.com/Husamoa/mitraposadzki" URL="http://mitraposadzki.pl/" abstract="This is page for my friend who starting up business
      Used bootstrap template.
      Main template: Bootstrap 4 Modern Business" cardContent={<CardContent > <Typography paragraph="paragraph" component="h2" variant="h6">
                Technologies:
              </Typography>
              <Typography paragraph="paragraph">HTML5</Typography>
              <Typography paragraph="paragraph">Bootstrap4</Typography>
              <Typography paragraph="paragraph">SASS</Typography>
              <Typography paragraph="paragraph">Gulp</Typography>
            </CardContent>}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 mx-auto d-flex justify-content-center">
            <RecipeReviewCard imageURL='images/furry-game/furry-screenshot.png' title="Furry Game" subheader="July 2018" logoURL="images/furry-game/furry.png" GitHubURL="https://github.com/Husamoa/Furry-Game" URL="http://the-coders.pl/furry-game/" abstract="It is a project for Coders Lab IT School.
                Rules: You have to survive" cardContent={<CardContent > <Typography paragraph="paragraph" component="h2" variant="h6">
                Technologies:
              </Typography>
              <Typography paragraph="paragraph">HTML5</Typography>
              <Typography paragraph="paragraph">ES6</Typography>
              <Typography paragraph="paragraph">Sass</Typography>
              <Typography paragraph="paragraph">Webpack</Typography>
            </CardContent>}/>
          </div>
          <div className="col-xl-6 mx-auto d-flex justify-content-center">
            <RecipeReviewCard imageURL='images/sit-on-chair/sitonchair-screenshot.png' title="Sit On Chair" subheader="May 2018" logoURL="images/sit-on-chair/black-chair.png" GitHubURL="https://github.com/Husamoa/SitOnChair" URL="https://husamoa.github.io/SitOnChair/" abstract="First example no RWD site for Coders Lab workshop." cardContent={<CardContent > <Typography paragraph="paragraph" component="h2" variant="h6">
                Technologies:
              </Typography>
              <Typography paragraph="paragraph">HTML5</Typography>
              <Typography paragraph="paragraph">CSS/Sass</Typography>
              <Typography paragraph="paragraph">JavaScript</Typography>
              <Typography paragraph="paragraph">Gulp</Typography>
              <Typography paragraph="paragraph">No templates or frameworks</Typography>
            </CardContent>}/>
          </div>
        </div>
      </div>
    </main>
  </section>);
}

export default Portfolio;
