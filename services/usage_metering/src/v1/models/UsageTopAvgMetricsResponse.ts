import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageTopAvgMetricsHour } from "./UsageTopAvgMetricsHour";
import { UsageTopAvgMetricsMetadata } from "./UsageTopAvgMetricsMetadata";

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
    metadata: {
      baseName: "metadata",
      type: "UsageTopAvgMetricsMetadata",
    },
    usage: {
      baseName: "usage",
      type: "Array<UsageTopAvgMetricsHour>",
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
    return UsageTopAvgMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
