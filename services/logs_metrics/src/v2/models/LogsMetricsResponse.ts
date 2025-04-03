import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsMetricResponseData } from "./LogsMetricResponseData";

/**
 * All the available log-based metric objects.
 */
export class LogsMetricsResponse {
  /**
   * A list of log-based metric objects.
   */
  "data"?: Array<LogsMetricResponseData>;
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
    data: {
      baseName: "data",
      type: "Array<LogsMetricResponseData>",
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
    return LogsMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
