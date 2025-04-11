import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAPITestResultShort } from "./SyntheticsAPITestResultShort";

/**
 * Object with the latest Synthetic API test run.
 */
export class SyntheticsGetAPITestLatestResultsResponse {
  /**
   * Timestamp of the latest API test run.
   */
  "lastTimestampFetched"?: number;
  /**
   * Result of the latest API test run.
   */
  "results"?: Array<SyntheticsAPITestResultShort>;
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
      type: "Array<SyntheticsAPITestResultShort>",
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
    return SyntheticsGetAPITestLatestResultsResponse.attributeTypeMap;
  }

  public constructor() {}
}
