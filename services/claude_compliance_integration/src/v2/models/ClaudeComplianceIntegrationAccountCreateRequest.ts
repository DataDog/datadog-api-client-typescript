import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountCreateData } from "./ClaudeComplianceIntegrationAccountCreateData";

/**
 * Request payload to create a Claude Compliance integration account.
 */
export class ClaudeComplianceIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating a Claude Compliance integration account.
   */
  "data": ClaudeComplianceIntegrationAccountCreateData;
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
      type: "ClaudeComplianceIntegrationAccountCreateData",
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
    return ClaudeComplianceIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
