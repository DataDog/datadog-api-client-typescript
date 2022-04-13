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
 * The counts of monitors per different criteria.
 */

export class MonitorSearchResponseCounts {
  /**
   * Search facets.
   */
  "muted"?: Array<any>;
  /**
   * Search facets.
   */
  "status"?: Array<any>;
  /**
   * Search facets.
   */
  "tag"?: Array<any>;
  /**
   * Search facets.
   */
  "type"?: Array<any>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    muted: {
      baseName: "muted",
      type: "Array<any>",
    },
    status: {
      baseName: "status",
      type: "Array<any>",
    },
    tag: {
      baseName: "tag",
      type: "Array<any>",
    },
    type: {
      baseName: "type",
      type: "Array<any>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorSearchResponseCounts.attributeTypeMap;
  }

  public constructor() {}
}
