import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountAuthenticationUpdate } from "./ClaudeComplianceIntegrationAccountAuthenticationUpdate";

/**
 * Writable attributes used to update a Claude Compliance integration account. Every field is optional. Only the provided fields are changed.
 */
export class ClaudeComplianceIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the Claude Compliance integration account. Exactly one method is set.
   */
  "authentication"?: ClaudeComplianceIntegrationAccountAuthenticationUpdate;
  /**
   * Human-readable name of the Claude Compliance integration account.
   */
  "name"?: string;
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
      type: "ClaudeComplianceIntegrationAccountAuthenticationUpdate",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return ClaudeComplianceIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
