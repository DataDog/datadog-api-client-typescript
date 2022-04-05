/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "../util";

/**
 * Paging attributes.
 */

export class ProcessSummariesMetaPage {
  /**
   * The cursor used to get the next results, if any. To make the next request, use the same parameters with the addition of the `page[cursor]`.
   */
  "after"?: string;
  /**
   * Number of results returned.
   */
  "size"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    after: {
      baseName: "after",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      format: "int32",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProcessSummariesMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
