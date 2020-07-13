import { IBaseDataWrapper } from '../base/base-data-wrapper';
import { IComic } from './comic';
import { IComicDataContainer } from './comic-data-container';

export interface IComicDataWrapper extends IBaseDataWrapper<IComic, IComicDataContainer> {
    
}