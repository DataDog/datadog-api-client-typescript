/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Exclusion filter is defined by a query, a sampling rule, and a active/inactive toggle.
 */
export class LogsExclusionFilter {
  /**
   * Default query is `*`, meaning all logs flowing in the index would be excluded.
   * Scope down exclusion filter to only a subset of logs with a log query.
   */
  "query"?: string;
  /**
   * Sample rate to apply to logs going through this exclusion filter,
   * a value of 1.0 excludes all logs matching the query.
   */
  "sampleRate": number;

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
    query: {
      baseName: "query",
      type: "string",
    },
    sampleRate: {
      baseName: "sample_rate",
      type: "number",
      required: true,
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsExclusionFilter.attributeTypeMap;
  }

  public constructor() {}
}
