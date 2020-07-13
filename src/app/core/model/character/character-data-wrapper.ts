import { IBaseDataWrapper } from '../base/base-data-wrapper';
import { ICharacter } from './character';
import { ICharacterDataContainer } from './character-data-container';

export interface ICharacterDataWrapper extends IBaseDataWrapper<ICharacter, ICharacterDataContainer> {
    
}