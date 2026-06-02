import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedLongTasksRequestData } from "./AggregatedLongTasksRequestData";

/**
 * Request body for the aggregated long tasks endpoint.
 */
export class AggregatedLongTasksRequest {
  /**
   * Data envelope for an aggregated long tasks request.
   */
  "data": AggregatedLongTasksRequestData;
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
      type: "AggregatedLongTasksRequestData",
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
    return AggregatedLongTasksRequest.attributeTypeMap;
  }

  public constructor() {}
}
