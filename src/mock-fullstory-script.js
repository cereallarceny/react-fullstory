export default () => {
  window[window['_fs_namespace']] = {
    identify: (...args) => ({ method: 'identify', args }),
    setUserVars: (...args) => ({ method: 'setUserVars', args }),
    event: (...args) => ({ method: 'event', args }),
    shutdown: (...args) => ({ method: 'shutdown', args }),
    restart: (...args) => ({ method: 'restart', args }),
    log: (...args) => ({ method: 'log', args }),
    consent: (...args) => ({ method: 'consent', args }),
    identifyAccount: (...args) => ({ method: 'identifyAccount', args }),
    clearUserCookie: (...args) => ({ method: 'clearUserCookie', args })
  };
};
