import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountUpdateAttributes } from "./GitHubCostsIntegrationAccountUpdateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope for updating a GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountUpdateData {
  /**
   * Writable attributes used to update a GitHub Costs integration account. Every field is optional; only the fields provided are changed.
   */
  "attributes": GitHubCostsIntegrationAccountUpdateAttributes;
  /**
   * Unique identifier of the GitHub Costs integration account to update.
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
      type: "GitHubCostsIntegrationAccountUpdateAttributes",
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
    return GitHubCostsIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
