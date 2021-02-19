/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToUser } from './RelationshipToUser';
import { HttpFile } from '../http/http';

/**
* Relationships data for user invitation.
*/
export class UserInvitationRelationships {
    'user': RelationshipToUser;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "RelationshipToUser",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserInvitationRelationships.attributeTypeMap;
    }
    
    public constructor() {
    }
}

