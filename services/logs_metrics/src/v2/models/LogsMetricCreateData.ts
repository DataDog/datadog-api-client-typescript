import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsMetricCreateAttributes } from "./LogsMetricCreateAttributes";
import { LogsMetricType } from "./LogsMetricType";

/**
 * The new log-based metric properties.
 */
export class LogsMetricCreateData {
  /**
   * The object describing the Datadog log-based metric to create.
   */
  "attributes": LogsMetricCreateAttributes;
  /**
   * The name of the log-based metric.
   */
  "id": string;
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
      type: "LogsMetricCreateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
      required: true,
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
    return LogsMetricCreateData.attributeTypeMap;
  }

  public constructor() {}
}
