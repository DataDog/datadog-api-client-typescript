import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitHubCostsIntegrationAccountResponseAttributes } from "./GitHubCostsIntegrationAccountResponseAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope of a GitHub Costs integration account, including server-assigned identity.
 */
export class GitHubCostsIntegrationAccountResponseData {
  /**
   * Attributes of a GitHub Costs integration account returned in responses.
   */
  "attributes": GitHubCostsIntegrationAccountResponseAttributes;
  /**
   * Server-generated unique identifier of the GitHub Costs integration account.
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
      type: "GitHubCostsIntegrationAccountResponseAttributes",
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
    return GitHubCostsIntegrationAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
