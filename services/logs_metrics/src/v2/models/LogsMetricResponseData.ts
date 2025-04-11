import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsMetricResponseAttributes } from "./LogsMetricResponseAttributes";
import { LogsMetricType } from "./LogsMetricType";

/**
 * The log-based metric properties.
 */
export class LogsMetricResponseData {
  /**
   * The object describing a Datadog log-based metric.
   */
  "attributes"?: LogsMetricResponseAttributes;
  /**
   * The name of the log-based metric.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be logs_metrics.
   */
  "type"?: LogsMetricType;
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
    attributes: {
      baseName: "attributes",
      type: "LogsMetricResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
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
    return LogsMetricResponseData.attributeTypeMap;
  }

  public constructor() {}
}
