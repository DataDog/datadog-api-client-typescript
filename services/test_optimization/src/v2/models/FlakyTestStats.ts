import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test statistics for the flaky test.
 */
export class FlakyTestStats {
  /**
   * The failure rate percentage of the test for the past 7 days. This is the number of failed test runs divided by the total number of test runs (excluding skipped test runs).
   */
  "failureRatePct"?: number;
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
    failureRatePct: {
      baseName: "failure_rate_pct",
      type: "number",
      format: "double",
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
    return FlakyTestStats.attributeTypeMap;
  }

  public constructor() {}
}
