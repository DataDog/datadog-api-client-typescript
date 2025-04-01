/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPAllowlistEntry } from "./IPAllowlistEntry";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of the IP allowlist.
*/
export class IPAllowlistAttributes {
  /**
   * Whether the IP allowlist logic is enabled or not.
  */
  "enabled"?: boolean;
  /**
   * Array of entries in the IP allowlist.
  */
  "entries"?: Array<IPAllowlistEntry>;

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
    "enabled": {
      "baseName": "enabled",
      "type": "boolean",
    },
    "entries": {
      "baseName": "entries",
      "type": "Array<IPAllowlistEntry>",
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




    return IPAllowlistAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









