import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsMetricType } from "./LogsMetricType";
import { LogsMetricUpdateAttributes } from "./LogsMetricUpdateAttributes";

/**
 * The new log-based metric properties.
 */
export class LogsMetricUpdateData {
  /**
   * The log-based metric properties that will be updated.
   */
  "attributes": LogsMetricUpdateAttributes;
  /**
   * The type of the resource. The value should always be logs_metrics.
   */
  "type": LogsMetricType;
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
      type: "LogsMetricUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
      required: true,
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
    return LogsMetricUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
