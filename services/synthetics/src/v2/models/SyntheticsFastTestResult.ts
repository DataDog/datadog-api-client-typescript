import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsFastTestResultData } from "./SyntheticsFastTestResultData";

/**
 * Fast test result response. Returns `null` if the result is not yet available
 * (the test is still running or timed out before completing).
 */
export class SyntheticsFastTestResult {
  /**
   * Fast test result data object (JSON:API format).
   */
  "data"?: SyntheticsFastTestResultData;
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
      type: "SyntheticsFastTestResultData",
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
    return SyntheticsFastTestResult.attributeTypeMap;
  }

  public constructor() {}
}
