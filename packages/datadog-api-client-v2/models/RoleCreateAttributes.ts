/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of the created role.
*/
export class RoleCreateAttributes {
  /**
   * Creation time of the role.
  */
  "createdAt"?: Date;
  /**
   * Time of last role modification.
  */
  "modifiedAt"?: Date;
  /**
   * Name of the role.
  */
  "name": string;

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
    "createdAt": {
      "baseName": "created_at",
      "type": "Date",
      "format": "date-time",
    },
    "modifiedAt": {
      "baseName": "modified_at",
      "type": "Date",
      "format": "date-time",
    },
    "name": {
      "baseName": "name",
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




    return RoleCreateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









