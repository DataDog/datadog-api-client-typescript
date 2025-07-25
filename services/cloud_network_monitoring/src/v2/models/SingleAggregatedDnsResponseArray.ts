import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SingleAggregatedDnsResponseData } from "./SingleAggregatedDnsResponseData";

/**
 * List of aggregated DNS flows.
 */
export class SingleAggregatedDnsResponseArray {
  /**
   * Array of aggregated DNS objects.
   */
  "data"?: Array<SingleAggregatedDnsResponseData>;
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
      type: "Array<SingleAggregatedDnsResponseData>",
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
    return SingleAggregatedDnsResponseArray.attributeTypeMap;
  }

  public constructor() {}
}
