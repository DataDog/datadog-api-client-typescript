import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountAuthenticationRequest } from "./ClaudeComplianceIntegrationAccountAuthenticationRequest";

/**
 * Writable attributes used to create a Claude Compliance integration account.
 */
export class ClaudeComplianceIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the Claude Compliance integration account. Exactly one method is set.
   */
  "authentication": ClaudeComplianceIntegrationAccountAuthenticationRequest;
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
      type: "ClaudeComplianceIntegrationAccountAuthenticationRequest",
      required: true,
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
    return ClaudeComplianceIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
