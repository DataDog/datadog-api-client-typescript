/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The search and filter query settings.
 */
export class SpansQueryFilter {
  /**
   * The minimum time for the requested spans, supports date-time ISO8601, date math, and regular timestamps (milliseconds).
   */
  "from"?: string;
  /**
   * The search query - following the span search syntax.
   */
  "query"?: string;
  /**
   * The maximum time for the requested spans, supports date-time ISO8601, date math, and regular timestamps (milliseconds).
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
      type: "string",
    },
    query: {
      type: "string",
    },
    to: {
      type: "string",
    },
  };
}
