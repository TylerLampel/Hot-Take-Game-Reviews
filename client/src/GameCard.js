import React, { useState } from "react";
import Reviews from "./Reviews";
import Card from "@mui/material/Card";
import { IconButton } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function GameCard({ game, deleteGame, games, setGames }) {
  const { id, title, image_url, age_rating, description } = game;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDeleteGameClick() {
    fetch(`/games/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        deleteGame(id);
      }
    });
  }

  return (
    <Card elevation={3}>
      <CardHeader
        title={title}
        variant="h2"
        action={
          <IconButton onClick={handleDeleteGameClick}>
            <DeleteForeverOutlinedIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="250"
        image={image_url}
        alt={title}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography paragraph>Age Rating: {age_rating}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <CardActions>
          <Button onClick={handleOpen}>Open modal</Button>
        </CardActions>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Reviews
              gameReviews={game.reviews}
              game_id={game.id}
              games={games}
              setGames={setGames}
              game={game}
            />
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
}
export default GameCard;
