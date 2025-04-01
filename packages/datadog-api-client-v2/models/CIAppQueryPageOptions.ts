/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Paging attributes for listing events.
*/
export class CIAppQueryPageOptions {
  /**
   * List following results with a cursor provided in the previous query.
  */
  "cursor"?: string;
  /**
   * Maximum number of events in the response.
  */
  "limit"?: number;

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
    "cursor": {
      "baseName": "cursor",
      "type": "string",
    },
    "limit": {
      "baseName": "limit",
      "type": "number",
      "format": "int32",
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




    return CIAppQueryPageOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









