import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedWaterfallRequestData } from "./AggregatedWaterfallRequestData";

/**
 * Request body for the aggregated waterfall endpoint.
 */
export class AggregatedWaterfallRequest {
  /**
   * Data envelope for an aggregated waterfall request.
   */
  "data": AggregatedWaterfallRequestData;
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
      type: "AggregatedWaterfallRequestData",
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
    return AggregatedWaterfallRequest.attributeTypeMap;
  }

  public constructor() {}
}
