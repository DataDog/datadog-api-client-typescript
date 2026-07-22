import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetDataObservabilityMonitorRunStatusResponseData } from "./GetDataObservabilityMonitorRunStatusResponseData";

/**
 * The response for getting the status of a data observability monitor run.
 */
export class GetDataObservabilityMonitorRunStatusResponse {
  /**
   * The data object for a data observability monitor run status response.
   */
  "data": GetDataObservabilityMonitorRunStatusResponseData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "GetDataObservabilityMonitorRunStatusResponseData",
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
    return GetDataObservabilityMonitorRunStatusResponse.attributeTypeMap;
  }

  public constructor() {}
}
