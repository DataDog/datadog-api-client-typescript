import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RunDataObservabilityMonitorResponseData } from "./RunDataObservabilityMonitorResponseData";

/**
 * The response returned when a data observability monitor run is triggered.
 */
export class RunDataObservabilityMonitorResponse {
  /**
   * The data object returned when a data observability monitor run is triggered.
   */
  "data": RunDataObservabilityMonitorResponseData;
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
      type: "RunDataObservabilityMonitorResponseData",
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
    return RunDataObservabilityMonitorResponse.attributeTypeMap;
  }

  public constructor() {}
}
