export const fetchPlanetsCoordinates = async (setCoordinates, setNumrun) => {
    try {
      const response = await fetch(
        `https://kekrvok46l.execute-api.us-east-1.amazonaws.com/test/user?date=1988-Dec-32&id=298`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "none",
          },
          mode: "cors",
        }
      );
  
      const data = await response.json();
      console.log(data);
      setCoordinates({
        x: data.user.x.S,
        y: data.user.y.S,
      });
      setNumrun(false)
    } catch (error) {
      console.error(error);
    }
  };