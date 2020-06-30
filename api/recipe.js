const recipeMethods = {
  search: async (query) => {
    let url =
      "https://api.edamam.com/search?q=" +
      query +
      "&app_id=655c48d5&app_key=0f8f1c9d581aeb37f0d1f5b56392e52b";

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { hits } = data;
        return hits;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default recipeMethods;
