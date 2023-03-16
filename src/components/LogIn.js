import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";

import Typography from "@mui/joy/Typography";

export default function LoginModal() {
  return (
    <>
      <Modal open={true}>
        <ModalDialog
          aria-labelledby='basic-modal-dialog-title'
          aria-describedby='basic-modal-dialog-description'
          sx={{ maxWidth: 500 }}
        >
          <Typography
            textAlign='center'
            id='basic-modal-dialog-title'
            component='h2'
          >
            Log In
          </Typography>

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input required />
              </FormControl>
              <Button type='submit'>Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
