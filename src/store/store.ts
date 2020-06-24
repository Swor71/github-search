import { observable } from 'mobx';
import { createContext } from 'react';
import { User, Repository } from '../types/types';

class Store {
  @observable userData?: User;

  @observable userRepositories?: Repository[];

  @observable error?: Error;
}

export const StoreContext = createContext(new Store());
