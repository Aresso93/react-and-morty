import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { Origin } from "../model/character";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface characterCardProps {
  name: string;
  id: number;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: Origin;
  location: Location;
  episode: string[];
}

export function CharacterSimpleCard(props: characterCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }} className="character-card">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
      />
      <CardMedia
        component="img"
        height="350"
        image={props.image}
        alt={props.name}
      />
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <div className="card-buttons">
          <Button
            variant="contained"
            onClick={() => {
              console.log(props.id);
            }}
          >
            See character details
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
