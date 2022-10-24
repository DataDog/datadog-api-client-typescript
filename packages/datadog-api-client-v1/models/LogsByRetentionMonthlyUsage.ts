/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsRetentionSumUsage } from "./LogsRetentionSumUsage";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object containing a summary of indexed logs usage by retention period for a single month.
 */
export class LogsByRetentionMonthlyUsage {
  /**
   * The month for the usage.
   */
  "date"?: Date;
  /**
   * Indexed logs usage for each active retention for the month.
   */
  "usage"?: Array<LogsRetentionSumUsage>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    date: {
      baseName: "date",
      type: "Date",
      format: "date-time",
    },
    usage: {
      baseName: "usage",
      type: "Array<LogsRetentionSumUsage>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsByRetentionMonthlyUsage.attributeTypeMap;
  }

  public constructor() {}
}
