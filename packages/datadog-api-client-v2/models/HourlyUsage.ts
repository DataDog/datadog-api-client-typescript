/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsageAttributes } from "./HourlyUsageAttributes";
import { UsageTimeSeriesType } from "./UsageTimeSeriesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Hourly usage for a product family for an org.
 */
export class HourlyUsage {
  /**
   * Attributes of hourly usage for a product family for an org for a time period.
   */
  "attributes"?: HourlyUsageAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of usage data.
   */
  "type"?: UsageTimeSeriesType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "HourlyUsageAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageTimeSeriesType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HourlyUsage.attributeTypeMap;
  }

  public constructor() {}
}
