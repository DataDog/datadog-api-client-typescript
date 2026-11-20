import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountResponseData } from "./ClaudeComplianceIntegrationAccountResponseData";

/**
 * Response payload for a single Claude Compliance integration account.
 */
export class ClaudeComplianceIntegrationAccountResponse {
  /**
   * Data envelope of a Claude Compliance integration account, including server-assigned identity.
   */
  "data": ClaudeComplianceIntegrationAccountResponseData;
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
      type: "ClaudeComplianceIntegrationAccountResponseData",
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
    return ClaudeComplianceIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
