import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleQueryPayloadData } from "./SecurityMonitoringRuleQueryPayloadData";

/**
 * Payload to test a rule query with the expected result.
 */
export class SecurityMonitoringRuleQueryPayload {
  /**
   * Expected result of the test.
   */
  "expectedResult"?: boolean;
  /**
   * Index of the query under test.
   */
  "index"?: number;
  /**
   * Payload used to test the rule query.
   */
  "payload"?: SecurityMonitoringRuleQueryPayloadData;
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
    expectedResult: {
      baseName: "expectedResult",
      type: "boolean",
    },
    index: {
      baseName: "index",
      type: "number",
      format: "int64",
    },
    payload: {
      baseName: "payload",
      type: "SecurityMonitoringRuleQueryPayloadData",
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
    return SecurityMonitoringRuleQueryPayload.attributeTypeMap;
  }

  public constructor() {}
}
