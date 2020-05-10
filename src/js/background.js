import secrets from "secrets";

const { API_KEY, GREMLIN_URL, TEAM_ID } = secrets;

async function fetchData() {
  try {
    const response = await fetch(GREMLIN_URL + `/metadata?teamId=${TEAM_ID}`, {
      headers: {
        Authorization: `Key ${API_KEY}`,
      },
    });
    return response.json();
  } catch (err) {
    console.error(err);
  }
}

let inverval;
const createInterval = () => {
  interval = setInterval(
    () =>
      fetchData().then((data) => {
        console.log("data", data);
      }),
    10000
  );
};

const destroyInterval = () => {
  clearInterval(inverval);
};

createInterval();
