const { getGifs } = require("../../helpers/getGifs");


describe('Pruebas con getGifs', () => {
  test('Debe de traer 10 elementos', async() => {
    const gifs = await getGifs('Pokemon');
    expect(gifs.length).toBe(10);
  });

  test('Debe de traer 0 elementos al no enviar categorias', async() => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
  
});
