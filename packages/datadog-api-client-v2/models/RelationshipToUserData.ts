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

import { UsersType } from './UsersType';
import { HttpFile } from '../http/http';

/**
* Relationship to user object.
*/
export class RelationshipToUserData {
    /**
    * A unique identifier that represents the user.
    */
    'id': string;
    'type': UsersType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UsersType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelationshipToUserData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

