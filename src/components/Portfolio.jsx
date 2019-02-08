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
      <div className="row ">
        <div className="col-xl-6 mx-auto d-flex justify-content-center">
          <RecipeReviewCard imageURL='images/andrzejhypki/hol-uam.jpg' title="Andrzej Hypki - architect" subheader="November 2018" logoURL="images/andrzejhypki/andrzejhypki.jpg" GitHubURL="https://github.com/Husamoa/andrzej-hypki-pl" URL="http://andrzejhypki.pl/" abstract="This is page for my friend who starting up business such as architect.
          Main template: Bootstrap 4 Mazel Template" cardContent={<CardContent > <Typography paragraph="paragraph" component="h2" variant="h6">
              Technologies:
            </Typography>
            <Typography paragraph="paragraph">HTML5</Typography>
            <Typography paragraph="paragraph">Bootstrap4</Typography>
            <Typography paragraph="paragraph">CSS3</Typography>
            <Typography paragraph="paragraph">JQuery</Typography>
          </CardContent>}/>        </div>
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
      <div className="row ">
        <div className="col-xl-6 mx-auto d-flex justify-content-center">
          <RecipeReviewCard imageURL='images/andrzejhypki/hol-uam.jpg' title="Andrzej Hypki - architect" subheader="November 2018" logoURL="images/andrzejhypki/andrzejhypki.jpg" GitHubURL="https://github.com/Husamoa/andrzej-hypki-pl" URL="http://andrzejhypki.pl/" abstract="This is page for my friend who starting up business such as architect.
          Main template: Bootstrap 4 Mazel Template" cardContent={<CardContent > <Typography paragraph="paragraph" component="h2" variant="h6">
              Technologies:
            </Typography>
            <Typography paragraph="paragraph">HTML5</Typography>
            <Typography paragraph="paragraph">Bootstrap4</Typography>
            <Typography paragraph="paragraph">CSS3</Typography>
            <Typography paragraph="paragraph">JQuery</Typography>
          </CardContent>}/>        </div>
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
    </div>
  </main>
</section>);
}

export default Portfolio;
