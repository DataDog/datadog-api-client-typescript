/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A warning message indicating something that went wrong with the query.
*/
export class SpansWarning {
  /**
   * A unique code for this type of warning.
  */
  "code"?: string;
  /**
   * A detailed explanation of this specific warning.
  */
  "detail"?: string;
  /**
   * A short human-readable summary of the warning.
  */
  "title"?: string;

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
    "code": {
      "baseName": "code",
      "type": "string",
    },
    "detail": {
      "baseName": "detail",
      "type": "string",
    },
    "title": {
      "baseName": "title",
      "type": "string",
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




    return SpansWarning.attributeTypeMap;

  }

  public constructor() {











  }
}









