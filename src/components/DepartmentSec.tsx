import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { useState } from "react";

const DepartmentSec: React.FC = () => {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  return (
    <>
      <FormControlLabel
        label="Design"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <FormControlLabel
          label="Graphic Design"
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label="Web Design"
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        />
      </Box>
    </>
  );
};

export default DepartmentSec;
