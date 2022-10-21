const KEYZ = '18br1RhdV7AHbVjjvym9';
class Likes {
static likesCollectionApi = async () => {
  const collection = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/18br1RhdV7AHbVjjvym9/likes').then((res) => res.json());
  return collection;
};

static newLike = async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/18br1RhdV7AHbVjjvym9/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
}
export { Likes, KEYZ };
