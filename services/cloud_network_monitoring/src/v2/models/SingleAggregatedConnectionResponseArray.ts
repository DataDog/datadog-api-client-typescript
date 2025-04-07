import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SingleAggregatedConnectionResponseData } from "./SingleAggregatedConnectionResponseData";

/**
 * List of aggregated connections.
 */
export class SingleAggregatedConnectionResponseArray {
  /**
   * Array of aggregated connection objects.
   */
  "data"?: Array<SingleAggregatedConnectionResponseData>;
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
      type: "Array<SingleAggregatedConnectionResponseData>",
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
    return SingleAggregatedConnectionResponseArray.attributeTypeMap;
  }

  public constructor() {}
}
