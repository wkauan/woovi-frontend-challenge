import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import paymentOptions from "../../lib/data.json";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function FormCheckout() {
  const defaultInstallmentValue =
    paymentOptions[0]?.installments[0]?.value || "";

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
      <div className="flex flex-col space-y-7 py-3">
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
            defaultValue={defaultInstallmentValue}
          >
            {paymentOptions.flatMap((option) =>
              option.installments.map((installment) => (
                <MenuItem key={installment.value} value={installment.value}>
                  {installment.value}x {installment.amount}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
