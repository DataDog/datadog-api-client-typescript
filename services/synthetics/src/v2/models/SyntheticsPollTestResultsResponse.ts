import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultData } from "./SyntheticsTestResultData";
import { SyntheticsTestResultIncludedItem } from "./SyntheticsTestResultIncludedItem";

/**
 * Response object for polling Synthetic test results.
 */
export class SyntheticsPollTestResultsResponse {
  /**
   * Array of Synthetic test results.
   */
  "data"?: Array<SyntheticsTestResultData>;
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
      type: "Array<SyntheticsTestResultData>",
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
    return SyntheticsPollTestResultsResponse.attributeTypeMap;
  }

  public constructor() {}
}
