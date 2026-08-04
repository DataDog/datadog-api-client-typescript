import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudInterface } from "./ElasticCloudInterface";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";

/**
 * Attributes of an Elastic Cloud integration account.
 */
export class ElasticCloudIntegrationAccountAttributes {
  /**
   * Elastic Cloud interface (source-type). Exactly one interface variant is set, selected by its `type`.
   */
  "_interface": ElasticCloudInterface;
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
    _interface: {
      baseName: "interface",
      type: "ElasticCloudInterface",
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
    return ElasticCloudIntegrationAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
