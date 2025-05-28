/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgConfigType } from "./OrgConfigType";
import { OrgConfigWriteAttributes } from "./OrgConfigWriteAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * An Org Config write operation.
*/
export class OrgConfigWrite {
  /**
   * Writable attributes of an Org Config.
  */
  "attributes": OrgConfigWriteAttributes;
  /**
   * Data type of an Org Config.
  */
  "type": OrgConfigType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "OrgConfigWriteAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "OrgConfigType",
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




    return OrgConfigWrite.attributeTypeMap;

  }

  public constructor() {











  }
}









