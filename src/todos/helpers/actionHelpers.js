const steps = {
  START: 'START',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

function isFunction (target) {
  return typeof target === 'function';
}

function createAction(type, payload, meta) {
  const action = {
    type,
    payload,
    meta
  };

  if (payload instanceof Error) {
    action.error = true;
  }

  return action;
}

function getTypeByStep(type) {
  return step => `${type}_${step}`;
}

function getMetaByStep(meta) {
  return step => Object.assign({
    asyncStep: step
  }, meta);
}

function createAsyncAction(type, promiseCreator, metaCreator) {
  const meta = isFunction(metaCreator) ? metaCreator() : metaCreator;

  const getType = getTypeByStep(type);
  const getMeta = getMetaByStep(meta);
  const createActionForStep = function(step, payload) {
    return createAction(getType(step), payload, getMeta(step));
  };

  return data => dispatch => {

    dispatch(createActionForStep(steps.START, data));

    const promise = promiseCreator.call(this, data);

    if (promise && promise.then) {
      promise.then((result)=>{
        dispatch(createActionForStep(steps.COMPLETED, result));
      }).catch((err)=>{
        dispatch(createActionForStep(steps.FAILED, err));
      })
    }
  };
}

export default {
  createAsyncAction,
  steps
};
