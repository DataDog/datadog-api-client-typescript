import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTiming } from "./SyntheticsTiming";

/**
 * Result of the last API test run.
 */
export class SyntheticsAPITestResultShortResult {
  /**
   * Describes if the test run has passed or failed.
   */
  "passed"?: boolean;
  /**
   * Object containing all metrics and their values collected for a Synthetic API test.
   * See the [Synthetic Monitoring Metrics documentation](https://docs.datadoghq.com/synthetics/metrics/).
   */
  "timings"?: SyntheticsTiming;
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
    passed: {
      baseName: "passed",
      type: "boolean",
    },
    timings: {
      baseName: "timings",
      type: "SyntheticsTiming",
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
    return SyntheticsAPITestResultShortResult.attributeTypeMap;
  }

  public constructor() {}
}
