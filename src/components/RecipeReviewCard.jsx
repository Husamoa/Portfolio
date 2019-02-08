import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Facebook } from 'react-content-loader'

const MyFacebookLoader = () => <Facebook />



const styles = theme => ({
  card: {
    maxWidth: 400,
    marginBottom: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {

    const { classes, title, subheader, imageURL, URL, GitHubURL, logoURL, abstract, cardContent } = this.props;

    return (
      <Card className={`${classes.card}`}>
        <CardHeader
          avatar={
            <Avatar aria-label="Portfolio" className={classes.avatar} src={logoURL} />
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={ title }
          subheader={ subheader }
        />
        <CardMedia
          className={classes.media}
          image={ imageURL }
          title={ title }
        />
        <CardContent>
          <Typography component="p">
            {abstract}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton href={GitHubURL} target="_blank" aria-label="Github">
          <FontAwesomeIcon icon={faGithub}/>
          </IconButton>
          <Button href={URL} variant="outlined" className={classes.button} target="_blank">
            LIVE DEMO
          </Button>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              {cardContent}
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
