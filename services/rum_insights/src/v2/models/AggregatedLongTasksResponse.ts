import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedLongTasksResponseData } from "./AggregatedLongTasksResponseData";

/**
 * Response body for the aggregated long tasks endpoint.
 */
export class AggregatedLongTasksResponse {
  /**
   * Data envelope for an aggregated long tasks response.
   */
  "data": AggregatedLongTasksResponseData;
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
      type: "AggregatedLongTasksResponseData",
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
    return AggregatedLongTasksResponse.attributeTypeMap;
  }

  public constructor() {}
}
