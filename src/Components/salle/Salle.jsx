import { useState } from 'react';
import tableInfo from "../tables/TablesComponents";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import MenuCategorie from "../menuCatégorie/MenuCategorie.jsx";

const SalleComponent = ({ salle }) => {
  const [open, setOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleTableClick = (table) => {
    setSelectedTable(table);
    setOpen(true);
    setShowMenu(false);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTable(null);
    setShowMenu(false);
  };
  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.gridContainer}>
        {tableInfo.map((table, index) => (
          <div 
            key={index} 
            onClick={() => handleTableClick(table)} 
            style={{ ...styles.gridItem, ...styles[`position${index + 1}`] }}
          >
            <h3>Table {table.table}</h3>
            <img src={table.img} alt={`Table ${table.table}`} style={styles.image} />
            <p>Number of Places: {table.nbrPlaces}</p>
            <p>Position: ({table.posX}, {table.posY})</p>
            <p>Libre : {table.libre ? 'Oui' : 'Non'}</p>
          </div>
        ))}
      </div>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="table-modal-title"
          aria-describedby="table-modal-description"
      >
        <Box sx={styles.modal}>
          {selectedTable && !showMenu && (
              <>
                <h3>{salle}</h3>
                <h2 id="table-modal-title">Table {selectedTable.table}</h2>
                <p id="table-modal-description">Number of Places: {selectedTable.nbrPlaces}</p>
                <p>Position: ({selectedTable.posX}, {selectedTable.posY})</p>
                <Button onClick={handleShowMenu}>Afficher le Menu</Button>
                <Button onClick={handleClose}>Fermer</Button>
              </>
          )}

          {showMenu && (
              <div style={styles.menu}>
                <h2>Menu</h2>
                <MenuCategorie />
                <Button onClick={handleClose}>Fermer</Button>
              </div>
            )}
        </Box>
      </Modal>
    </div>
  );
};
const styles = {
  container: {
    backgroundColor: "#2E3548",
    height: '100%',
    width: '60vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
    height: '100%',
    width: '100%',
  },
  gridItem: {
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    cursor: 'pointer',
  },
  position1: {
    gridRow: 1,
    gridColumn: 1,
    alignSelf: 'start',
    justifySelf: 'end',
  },
  position2: {
    gridRow: 1,
    gridColumn: 3,
    alignSelf: 'start',
    justifySelf: 'end',
  },
  position3: {
    gridRow: 3,
    gridColumn: 1,
    alignSelf: 'end',
    justifySelf: 'end',
  },
  position4: {
    gridRow: 3,
    gridColumn: 3,
    alignSelf: 'end',
    justifySelf: 'end',
  },
  position5: {
    gridRow: 2,
    gridColumn: 2,
    alignSelf: 'center',
    justifySelf: 'center',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    overflow: 'hidden',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  },
  menu : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding : '20px',
  },
  listMenu : {
    width : '50px',

  }

};

SalleComponent.propTypes = {
  salle: PropTypes.string.isRequired,
};

export default SalleComponent;
