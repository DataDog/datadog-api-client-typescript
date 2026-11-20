import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClaudeComplianceIntegrationAccountUpdateAttributes } from "./ClaudeComplianceIntegrationAccountUpdateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope for updating a Claude Compliance integration account.
 */
export class ClaudeComplianceIntegrationAccountUpdateData {
  /**
   * Writable attributes used to update a Claude Compliance integration account. Every field is optional. Only the provided fields are changed.
   */
  "attributes": ClaudeComplianceIntegrationAccountUpdateAttributes;
  /**
   * Unique identifier of the Claude Compliance integration account to update.
   */
  "id": string;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;
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
    attributes: {
      baseName: "attributes",
      type: "ClaudeComplianceIntegrationAccountUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return ClaudeComplianceIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
