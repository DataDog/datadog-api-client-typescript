/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of an org authorized client.
*/
export class OrgAuthorizedClientAttributes {
  /**
   * Whether the organization has disabled this client.
  */
  "disabled": boolean;
  /**
   * The date and time this client was last exercised.
  */
  "lastExercised": Date|null;
  /**
   * The number of users in the organization who have authorized this client.
  */
  "userCount": number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "disabled": {
      "baseName": "disabled",
      "type": "boolean",
      "required": true,
    },
    "lastExercised": {
      "baseName": "last_exercised",
      "type": "Date",
      "required": true,
      "format": "date-time",
    },
    "userCount": {
      "baseName": "user_count",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return OrgAuthorizedClientAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









