'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const modifiedResult = { ...state};
  Object.assign(modifiedResult, state);

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProps(modifiedResult, action.extraData);
        break;

      case 'removeProperties':
        removeProps(modifiedResult, action.keysToRemove);
        break;

      case 'clear':
        clear(modifiedResult);
        break;

      default:
        return;
    }
  }

    function addProps(modifiedResult, extraData) {
      Object.assign(modifiedResult, extraData);
  }

  function removeProps(modifiedResult, keysToRemove) {
    for (const key of keysToRemove) {
      delete modifiedResult[key];
    }
  }

  function clear(modifiedResult) {
    for (const i in modifiedResult) {
      delete modifiedResult[i];
    }
  }

  return modifiedResult;

}

module.exports = transformStateWithClones;
