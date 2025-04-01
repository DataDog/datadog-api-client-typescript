/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserInvitationRelationships } from "./UserInvitationRelationships";
import { UserInvitationsType } from "./UserInvitationsType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object to create a user invitation.
*/
export class UserInvitationData {
  /**
   * Relationships data for user invitation.
  */
  "relationships": UserInvitationRelationships;
  /**
   * User invitations type.
  */
  "type": UserInvitationsType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "relationships": {
      "baseName": "relationships",
      "type": "UserInvitationRelationships",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "UserInvitationsType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return UserInvitationData.attributeTypeMap;

  }

  public constructor() {











  }
}









