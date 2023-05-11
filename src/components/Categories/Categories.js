import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const CategoriesItem = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    event.stopPropagation();
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "black",
      fontSize: 18,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Link style={{textDecoration:'none', color:'white', fontSize:'35px'}} to={'/'}><span style={styles.upperText}>S</span>hop</Link>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/item-categorie/Mates" style={styles.link}>
            Mates
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/item-categorie/Bombillas" style={styles.link}>
            Bombillas
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/item-categorie/Termos" style={styles.link}>
            Termos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/item-categorie/Bolsos" style={styles.link}>
            Bolsos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/item-categorie/Yerberos" style={styles.link}>
            Yerberos
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CategoriesItem;
