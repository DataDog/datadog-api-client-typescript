import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultIncludedItem } from "./SyntheticsTestResultIncludedItem";
import { SyntheticsTestResultSummaryData } from "./SyntheticsTestResultSummaryData";

/**
 * Response object for a Synthetic test's latest result summaries.
 */
export class SyntheticsTestLatestResultsResponse {
  /**
   * Array of Synthetic test result summaries.
   */
  "data"?: Array<SyntheticsTestResultSummaryData>;
  /**
   * Array of included related resources, such as the test definition.
   */
  "included"?: Array<SyntheticsTestResultIncludedItem>;
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
      type: "Array<SyntheticsTestResultSummaryData>",
    },
    included: {
      baseName: "included",
      type: "Array<SyntheticsTestResultIncludedItem>",
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
    return SyntheticsTestLatestResultsResponse.attributeTypeMap;
  }

  public constructor() {}
}
