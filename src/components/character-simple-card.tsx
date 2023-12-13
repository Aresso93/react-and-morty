import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Origin } from "../model/character";

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
              
            }}
          >
            See character details
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
