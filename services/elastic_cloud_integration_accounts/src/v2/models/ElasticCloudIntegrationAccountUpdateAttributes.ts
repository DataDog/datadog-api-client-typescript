import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudInterfaceUpdate } from "./ElasticCloudInterfaceUpdate";

/**
 * Updatable attributes of an Elastic Cloud integration account. Every field is optional; only the fields provided are changed.
 */
export class ElasticCloudIntegrationAccountUpdateAttributes {
  /**
   * Partial Elastic Cloud interface for updates. Exactly one interface variant is set, selected by its `type`.
   */
  "_interface"?: ElasticCloudInterfaceUpdate;
  /**
   * Human-readable name of the account.
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
    _interface: {
      baseName: "interface",
      type: "ElasticCloudInterfaceUpdate",
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
    return ElasticCloudIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
