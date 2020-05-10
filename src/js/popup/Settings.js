import { useState, useEffect } from "react";
import theme from "../theme";

async function fetchData() {
  try {
    const response = await fetch(
      url + "/metadata?teamId=e7352a6b-a9a0-513c-81e4-980f680a70c2",
      {
        headers: {
          Authorization: `Key ${API_KEY}`,
        },
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export default function Settings({ setKey, apiKey }) {
  const [formKey, setFormKey] = useState();

  useEffect(() => {
    console.log(apiKey);
    setFormKey(apiKey);

    fetchData().then((data) => console.log("data", data));
  }, []);

  return (
    <div css={{ width: theme.space[7] }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formKey);
          setKey(formKey);
        }}
      >
        <label>
          ApiKey:
          <input
            id="key"
            type="text"
            onChange={({ target }) => setFormKey(target.value)}
            value={formKey}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
