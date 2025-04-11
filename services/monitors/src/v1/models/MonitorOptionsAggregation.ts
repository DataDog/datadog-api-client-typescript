import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Type of aggregation performed in the monitor query.
 */
export class MonitorOptionsAggregation {
  /**
   * Group to break down the monitor on.
   */
  "groupBy"?: string;
  /**
   * Metric name used in the monitor.
   */
  "metric"?: string;
  /**
   * Metric type used in the monitor.
   */
  "type"?: string;
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
    groupBy: {
      baseName: "group_by",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorOptionsAggregation.attributeTypeMap;
  }

  public constructor() {}
}
