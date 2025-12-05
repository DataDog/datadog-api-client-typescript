import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsSuiteTestAlertingCriticality } from "./SyntheticsSuiteTestAlertingCriticality";

/**
 * Object containing details about a Synthetic test included in a Synthetic suite.
 */
export class SyntheticsSuiteTest {
  /**
   * Alerting criticality for each the test.
   */
  "alertingCriticality"?: SyntheticsSuiteTestAlertingCriticality;
  "publicId": string;
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
    alertingCriticality: {
      baseName: "alerting_criticality",
      type: "SyntheticsSuiteTestAlertingCriticality",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
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
    return SyntheticsSuiteTest.attributeTypeMap;
  }

  public constructor() {}
}
