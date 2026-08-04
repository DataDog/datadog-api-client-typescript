import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationType } from "./ElasticCloudIntegrationType";
import { ElasticCloudInterface } from "./ElasticCloudInterface";

/**
 * Elastic Cloud integration configuration.
 */
export class ElasticCloudIntegration {
  /**
   * Elastic Cloud interface (source-type). Exactly one interface variant is set, selected by its `type`.
   */
  "_interface": ElasticCloudInterface;
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
      type: "ElasticCloudInterface",
      required: true,
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
    return ElasticCloudIntegration.attributeTypeMap;
  }

  public constructor() {}
}
