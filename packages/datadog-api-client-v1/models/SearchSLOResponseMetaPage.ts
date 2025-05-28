/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Pagination metadata returned by the API.
*/
export class SearchSLOResponseMetaPage {
  /**
   * The first number.
  */
  "firstNumber"?: number;
  /**
   * The last number.
  */
  "lastNumber"?: number;
  /**
   * The next number.
  */
  "nextNumber"?: number;
  /**
   * The page number.
  */
  "number"?: number;
  /**
   * The previous page number.
  */
  "prevNumber"?: number;
  /**
   * The size of the response.
  */
  "size"?: number;
  /**
   * The total number of SLOs in the response.
  */
  "total"?: number;
  /**
   * Type of pagination.
  */
  "type"?: string;

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
    "firstNumber": {
      "baseName": "first_number",
      "type": "number",
      "format": "int64",
    },
    "lastNumber": {
      "baseName": "last_number",
      "type": "number",
      "format": "int64",
    },
    "nextNumber": {
      "baseName": "next_number",
      "type": "number",
      "format": "int64",
    },
    "number": {
      "baseName": "number",
      "type": "number",
      "format": "int64",
    },
    "prevNumber": {
      "baseName": "prev_number",
      "type": "number",
      "format": "int64",
    },
    "size": {
      "baseName": "size",
      "type": "number",
      "format": "int64",
    },
    "total": {
      "baseName": "total",
      "type": "number",
      "format": "int64",
    },
    "type": {
      "baseName": "type",
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




    return SearchSLOResponseMetaPage.attributeTypeMap;

  }

  public constructor() {











  }
}









