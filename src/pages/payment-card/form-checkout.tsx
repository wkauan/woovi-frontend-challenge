import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { paymentOptions } from "../../lib/data";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function FormCheckout() {
  return (
    <Box
      className="space-y-4 px-3"
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#E5E5E5",
          },
        },
      }}
    >
      <div className="flex flex-col space-y-7 mb-5">
        <TextField
          fullWidth
          id="name"
          label="Nome Completo"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          id="cpf-input"
          label="CPF"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          id="number"
          label="Número do cartão"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className="flex gap-4">
          <TextField
            fullWidth
            id="search"
            label="Vencimento"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            className="font-bold"
          />
          <TextField
            fullWidth
            id="cvv"
            label="CVV"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>

      <div className="w-full">
        <FormControl className="w-full">
          <InputLabel id="select-label">Parcelas</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            label="Parcelas"
            defaultValue={paymentOptions[0].installments}
          >
            {paymentOptions.map((option, index) => (
              <MenuItem key={index} value={option.installments}>
                {option.installments}x {option.amount}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
