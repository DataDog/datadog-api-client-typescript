/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleQueryPayloadData } from "./SecurityMonitoringRuleQueryPayloadData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "any",
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
