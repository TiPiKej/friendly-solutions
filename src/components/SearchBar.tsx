import { useEffect } from "react";
import { useInput } from "../services/hooks";

interface SearchBarProps {
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

function SearchBar(props: SearchBarProps) {
  const { searchTerm, setSearchTerm } = props;
  const inputProps = useInput(searchTerm);
  
  useEffect(() => {
    setSearchTerm(inputProps.value);
  }, [inputProps.value]);

  return (
    <input
      type="text"
      {...inputProps}
    />
  );
}

export default SearchBar;
