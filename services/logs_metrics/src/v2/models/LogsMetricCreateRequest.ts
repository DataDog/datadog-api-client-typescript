import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsMetricCreateData } from "./LogsMetricCreateData";

/**
 * The new log-based metric body.
 */
export class LogsMetricCreateRequest {
  /**
   * The new log-based metric properties.
   */
  "data": LogsMetricCreateData;
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
      type: "LogsMetricCreateData",
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
    return LogsMetricCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
