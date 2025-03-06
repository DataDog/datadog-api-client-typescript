/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a rate limit for a trigger.
 */
export class TriggerRateLimit {
  /**
   * The `TriggerRateLimit` `count`.
   */
  "count"?: number;
  /**
   * The `TriggerRateLimit` `interval`. The expected format is the number of seconds ending with an s. For example, 1 day is 86400s
   */
  "interval"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TriggerRateLimit.attributeTypeMap;
  }

  public constructor() {}
}
