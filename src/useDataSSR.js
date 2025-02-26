import { useContext, useState } from "react";
import InitialDataContext from "./InitialDataContext";

const useDataSSR = (resourceName, loadFunction) => {
  const context = useContext(InitialDataContext);
  const [data, setData] = useState(context._data[resourceName]);

  if (context._isServerSide) {
    console.log("Calling api on server side");
    context._requests.push(
      loadFunction().then(data => (context._data[resourceName] = data))
    );
  } else if (!data) {
    loadFunction().then(data => {
      setData(data);
      context._data[resourceName] = data;
    });
  }
  return data;
};

export default useDataSSR;
