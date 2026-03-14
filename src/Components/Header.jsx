import { FormControl, Select, MenuItem, Button } from "@mui/material";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 mt-5">
          <div>
            <h1 className="text-[#E50914] font-bold text-5xl">NETFLIX</h1>
          </div>

          <div className="flex mt-5">
            <div className="border-white border-2 rounded-sm w-36 h-10 flex items-center">
              <FormControl fullWidth>
                <Select
                  defaultValue="en"
                  className="text-white"
                  sx={{
                    color: "white",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    ".MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "40px",
                    },
                    ".MuiSelect-icon": { color: "white" },
                    ".MuiOutlinedInput-notchedOutline": { border: "none" },
                  }}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="hi">Hindi</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="ml-5">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  fontWeight: "bold",
                }}
              >
                Sign-in
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-32 text-white text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Unlimited movies, <br />
              shows, and more
            </h1>
            <p className="mt-4 text-xl">Starts at ₹149. Cancel at any time.</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg md:text-xl">Ready to watch? Check below.</h3>
          </div>
        </div>
      </header>
    </>
  );
}
