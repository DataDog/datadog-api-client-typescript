/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsRetentionSumUsage } from "./LogsRetentionSumUsage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
    date: {
      baseName: "date",
      type: "Date",
      format: "date-time",
    },
    usage: {
      baseName: "usage",
      type: "Array<LogsRetentionSumUsage>",
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
    return LogsByRetentionMonthlyUsage.attributeTypeMap;
  }

  public constructor() {}
}
