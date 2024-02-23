/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The freshness of the monitor, indicating if the monitor evaluation is up to date. **This feature is currently in private beta.**
 */
export class MonitorFreshness {
  /**
   * The error message if the monitor freshness was not able to be determined.
   */
  "error"?: string;
  /**
   * Whether the monitor evaluation is up to date.
   */
  "isFresh"?: boolean;
  /**
   * The timestamp of the last evaluation.
   */
  "lastEvaluated"?: Date;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    error: {
      baseName: "error",
      type: "string",
    },
    isFresh: {
      baseName: "is_fresh",
      type: "boolean",
    },
    lastEvaluated: {
      baseName: "last_evaluated",
      type: "Date",
      format: "date-time",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFreshness.attributeTypeMap;
  }

  public constructor() {}
}
