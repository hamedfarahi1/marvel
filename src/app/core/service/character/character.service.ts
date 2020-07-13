import { CoreServiceBase } from '../base/core-service-base';
import { ICharacter } from '@core/model/character/character';
import { ICharacterDataContainer } from '@core/model/character/character-data-container';
import { ICharacterDataWrapper } from '@core/model/character/character-data-wrapper';
import { HttpClient } from '@angular/common/http';

export class CharacterService extends CoreServiceBase<ICharacter, ICharacterDataContainer, ICharacterDataWrapper>{
    constructor(http: HttpClient) {
        super('characters', http)
    }
}