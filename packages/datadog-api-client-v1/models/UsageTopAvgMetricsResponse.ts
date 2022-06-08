/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageTopAvgMetricsHour } from "./UsageTopAvgMetricsHour";
import { UsageTopAvgMetricsMetadata } from "./UsageTopAvgMetricsMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the number of hourly recorded custom metrics for a given organization.
 */
export class UsageTopAvgMetricsResponse {
  /**
   * The object containing document metadata.
   */
  "metadata"?: UsageTopAvgMetricsMetadata;
  /**
   * Number of hourly recorded custom metrics for a given organization.
   */
  "usage"?: Array<UsageTopAvgMetricsHour>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    metadata: {
      baseName: "metadata",
      type: "UsageTopAvgMetricsMetadata",
    },
    usage: {
      baseName: "usage",
      type: "Array<UsageTopAvgMetricsHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageTopAvgMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
