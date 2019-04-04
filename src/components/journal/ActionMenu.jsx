import React from "react";
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from '@material-ui/icons/Delete'
import ArchiveIcon from '@material-ui/icons/Archive'
import EditIcon from '@material-ui/icons/Edit'
import { archieveJournal } from '../../actions/journals'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const ActionMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <div>
      <IconButton
        aria-label="More"
        aria-haspopup="true"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => {
          props.archieveJournal(props.id, props.filed, props.archived)
          setAnchorEl(null)
        }}>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary={props.filed? "Desarquivar": "Arquivar"} inset/>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Editar" inset />
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Excluir" inset />
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ archieveJournal}, dispatch)
export default connect(null, mapDispatchToProps)(ActionMenu)