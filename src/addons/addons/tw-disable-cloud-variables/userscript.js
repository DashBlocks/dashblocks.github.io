export default async function ({ addon }) {
  addon.tab.redux.dispatch({
    type: 'tw/SET_CLOUD',
    cloud: false
  });
}
