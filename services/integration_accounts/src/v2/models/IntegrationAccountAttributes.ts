import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountIntegration } from "./IntegrationAccountIntegration";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";

/**
 * Attributes of an integration account. The `integration` field is a strongly-typed, per-integration union.
 */
export class IntegrationAccountAttributes {
  /**
   * Strongly-typed, per-integration configuration. Exactly one integration variant is set, selected by its `type`.
   */
  "integration": IntegrationAccountIntegration;
  /**
   * Human-readable name of the account.
   */
  "name": string;
  /**
   * Read-only permission information for the account, derived from its restriction policy.
   */
  "permissions"?: IntegrationAccountPermissions;
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
    integration: {
      baseName: "integration",
      type: "IntegrationAccountIntegration",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    permissions: {
      baseName: "permissions",
      type: "IntegrationAccountPermissions",
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
    return IntegrationAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
