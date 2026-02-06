import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardSearchResponseMeta } from "./DashboardSearchResponseMeta";
import { DashboardSearchResultData } from "./DashboardSearchResultData";

/**
 * Response containing dashboard search results.
 */
export class DashboardSearchResponse {
  /**
   * List of dashboard search results.
   */
  "data": Array<DashboardSearchResultData>;
  /**
   * Metadata about the dashboard search results.
   */
  "meta": DashboardSearchResponseMeta;
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
      type: "Array<DashboardSearchResultData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "DashboardSearchResponseMeta",
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
    return DashboardSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
