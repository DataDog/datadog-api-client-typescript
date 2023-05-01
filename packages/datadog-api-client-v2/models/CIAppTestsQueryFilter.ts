/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The search and filter query settings.
 */
export class CIAppTestsQueryFilter {
  /**
   * The minimum time for the requested events; supports date, math, and regular timestamps (in milliseconds).
   */
  "from"?: string;
  /**
   * The search query following the Log search syntax.
   */
  "query"?: string;
  /**
   * The maximum time for the requested events, supports date, math, and regular timestamps (in milliseconds).
   */
  "to"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    to: {
      baseName: "to",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppTestsQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
