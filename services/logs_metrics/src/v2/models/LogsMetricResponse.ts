import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsMetricResponseData } from "./LogsMetricResponseData";

/**
 * The log-based metric object.
 */
export class LogsMetricResponse {
  /**
   * The log-based metric properties.
   */
  "data"?: LogsMetricResponseData;
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
      type: "LogsMetricResponseData",
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
    return LogsMetricResponse.attributeTypeMap;
  }

  public constructor() {}
}
