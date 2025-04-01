/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The allowlisted invitees for an INVITE-only shared dashboard.
*/
export class SharedDashboardInviteesItems {
  /**
   * Time of the invitee expiration. Null means the invite will not expire.
  */
  "accessExpiration"?: Date;
  /**
   * Time that the invitee was created.
  */
  "createdAt"?: Date;
  /**
   * Email of the invitee.
  */
  "email": string;

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
    "accessExpiration": {
      "baseName": "access_expiration",
      "type": "Date",
      "format": "date-time",
    },
    "createdAt": {
      "baseName": "created_at",
      "type": "Date",
      "format": "date-time",
    },
    "email": {
      "baseName": "email",
      "type": "string",
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




    return SharedDashboardInviteesItems.attributeTypeMap;

  }

  public constructor() {











  }
}









