/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Schema for kind.
*/
export class KindObj {
  /**
   * Short description of the kind.
  */
  "description"?: string;
  /**
   * The display name of the kind. Automatically generated if not provided.
  */
  "displayName"?: string;
  /**
   * The name of the kind to create or update. This must be in kebab-case format.
  */
  "kind": string;

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
    },
    "displayName": {
      "baseName": "displayName",
      "type": "string",
    },
    "kind": {
      "baseName": "kind",
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




    return KindObj.attributeTypeMap;

  }

  public constructor() {











  }
}









