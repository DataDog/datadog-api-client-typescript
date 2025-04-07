import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricSearchResponseResults } from "./MetricSearchResponseResults";

/**
 * Object containing the list of metrics matching the search query.
 */
export class MetricSearchResponse {
  /**
   * Search result.
   */
  "results"?: MetricSearchResponseResults;
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
    results: {
      baseName: "results",
      type: "MetricSearchResponseResults",
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
    return MetricSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
