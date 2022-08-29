import GameSavingLoader from '../Classes/GameSavingLoader';

test('test GameSavingLoader Class', (done) => {
  const gameLoader = new GameSavingLoader();

  gameLoader.load().then((user) => {
    expect(user).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
    done();
  });
});
