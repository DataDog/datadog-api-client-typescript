import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBrowserTestResultShort } from "./SyntheticsBrowserTestResultShort";

/**
 * Object with the latest Synthetic browser test run.
 */
export class SyntheticsGetBrowserTestLatestResultsResponse {
  /**
   * Timestamp of the latest browser test run.
   */
  "lastTimestampFetched"?: number;
  /**
   * Result of the latest browser test run.
   */
  "results"?: Array<SyntheticsBrowserTestResultShort>;
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
    lastTimestampFetched: {
      baseName: "last_timestamp_fetched",
      type: "number",
      format: "int64",
    },
    results: {
      baseName: "results",
      type: "Array<SyntheticsBrowserTestResultShort>",
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
    return SyntheticsGetBrowserTestLatestResultsResponse.attributeTypeMap;
  }

  public constructor() {}
}
