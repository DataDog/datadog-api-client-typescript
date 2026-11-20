import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountResponseData } from "./ClaudeComplianceIntegrationAccountResponseData";

/**
 * Response payload for a list of Claude Compliance integration accounts.
 */
export class ClaudeComplianceIntegrationAccountsResponse {
  /**
   * List of Claude Compliance integration accounts.
   */
  "data": Array<ClaudeComplianceIntegrationAccountResponseData>;
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
      type: "Array<ClaudeComplianceIntegrationAccountResponseData>",
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
    return ClaudeComplianceIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
