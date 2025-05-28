/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Readable attributes of an Org Config.
*/
export class OrgConfigReadAttributes {
  /**
   * The description of an Org Config.
  */
  "description": string;
  /**
   * The timestamp of the last Org Config update (if any).
  */
  "modifiedAt"?: Date;
  /**
   * The machine-friendly name of an Org Config.
  */
  "name": string;
  /**
   * The value of an Org Config.
  */
  "value": any;
  /**
   * The type of an Org Config value.
  */
  "valueType": string;

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
    "description": {
      "baseName": "description",
      "type": "string",
      "required": true,
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
    "value": {
      "baseName": "value",
      "type": "any",
      "required": true,
    },
    "valueType": {
      "baseName": "value_type",
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




    return OrgConfigReadAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









