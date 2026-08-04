import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationType } from "./ElasticCloudIntegrationType";
import { ElasticCloudInterfaceUpdate } from "./ElasticCloudInterfaceUpdate";

/**
 * Partial Elastic Cloud integration configuration for updates.
 */
export class ElasticCloudIntegrationUpdate {
  /**
   * Partial Elastic Cloud interface for updates. Exactly one interface variant is set, selected by its `type`.
   */
  "_interface"?: ElasticCloudInterfaceUpdate;
  /**
   * Integration discriminator for Elastic Cloud.
   */
  "type": ElasticCloudIntegrationType;
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
    type: {
      baseName: "type",
      type: "ElasticCloudIntegrationType",
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
    return ElasticCloudIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
