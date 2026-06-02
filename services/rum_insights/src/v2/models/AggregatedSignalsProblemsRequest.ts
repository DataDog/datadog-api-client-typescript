import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedSignalsProblemsRequestData } from "./AggregatedSignalsProblemsRequestData";

/**
 * Request body for the aggregated signals and problems endpoint.
 */
export class AggregatedSignalsProblemsRequest {
  /**
   * Data envelope for an aggregated signals and problems request.
   */
  "data": AggregatedSignalsProblemsRequestData;
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
      type: "AggregatedSignalsProblemsRequestData",
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
    return AggregatedSignalsProblemsRequest.attributeTypeMap;
  }

  public constructor() {}
}
