import React, { Fragment } from "react";

import { Dialog, Grid } from "@mui/material";

const LocationMap = ({ maxWidth, button, buttonClass }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <button className={`btn ${buttonClass}`} onClick={handleClickOpen}>
        {button}
        See Location
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <button onClick={handleClose} className="event-close-btn">
          <i className="fa fa-close"></i>
        </button>
        <Grid className="modalBody modal-body">
          <Grid className="modalBody modal-body">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255757.7967398846!2d36.56572225698192!3d-1.3608067881082304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b2112e27aeb%3A0xb5b885a8a4c3f613!2sBrookhaven%20Gardens%2C%20Hillcrest%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1769096444166"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe> */}
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default LocationMap;
