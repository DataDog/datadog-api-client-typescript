/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Exclusion filter for the security filter.
 */
export class SecurityFilterExclusionFilter {
  /**
   * Exclusion filter name.
   */
  "name": string;
  /**
   * Exclusion filter query. Logs that match this query are excluded from the security filter.
   */
  "query": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityFilterExclusionFilter.attributeTypeMap;
  }

  public constructor() {}
}
