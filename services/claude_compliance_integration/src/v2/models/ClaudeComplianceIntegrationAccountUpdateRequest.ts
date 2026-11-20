import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountUpdateData } from "./ClaudeComplianceIntegrationAccountUpdateData";

/**
 * Request payload to update a Claude Compliance integration account.
 */
export class ClaudeComplianceIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating a Claude Compliance integration account.
   */
  "data": ClaudeComplianceIntegrationAccountUpdateData;
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
      type: "ClaudeComplianceIntegrationAccountUpdateData",
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
    return ClaudeComplianceIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
