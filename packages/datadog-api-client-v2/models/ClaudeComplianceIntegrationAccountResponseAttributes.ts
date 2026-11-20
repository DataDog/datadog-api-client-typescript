/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ClaudeComplianceIntegrationAccountAuthenticationResponse } from "./ClaudeComplianceIntegrationAccountAuthenticationResponse";
import { ClaudeComplianceIntegrationDataflowsResponse } from "./ClaudeComplianceIntegrationDataflowsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Claude Compliance integration account returned in responses.
 */
export class ClaudeComplianceIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Claude Compliance integration account.
   */
  "authentication"?: ClaudeComplianceIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from Claude Compliance, keyed by dataflow ID.
   */
  "dataflows"?: ClaudeComplianceIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Claude Compliance integration account.
   */
  "name": string;

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
    authentication: {
      baseName: "authentication",
      type: "ClaudeComplianceIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "ClaudeComplianceIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
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
    return ClaudeComplianceIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
