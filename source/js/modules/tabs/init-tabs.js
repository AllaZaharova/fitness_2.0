import {Tabs} from '../vendor/tabs';

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;

  console.log('Init tabs');
};

export {initTabs, tabs};