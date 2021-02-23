/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserInvitationRelationships } from './UserInvitationRelationships';
import { UserInvitationsType } from './UserInvitationsType';
import { HttpFile } from '../http/http';

/**
* Object to create a user invitation.
*/
export class UserInvitationData {
    'relationships': UserInvitationRelationships;
    'type': UserInvitationsType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "UserInvitationRelationships",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UserInvitationsType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserInvitationData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

