import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityIntegrationConfigAttributes } from "./EntityIntegrationConfigAttributes";
import { EntityIntegrationConfigType } from "./EntityIntegrationConfigType";

/**
 * JSON:API resource object for an entity integration configuration.
 */
export class EntityIntegrationConfigData {
  /**
   * The organization ID, integration identifier, and integration-specific configuration payload for an entity integration configuration.
   */
  "attributes": EntityIntegrationConfigAttributes;
  /**
   * Unique identifier of the entity integration configuration.
   */
  "id": string;
  /**
   * JSON:API resource type for an entity integration configuration. Always `entity_integration_configs`.
   */
  "type": EntityIntegrationConfigType;
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
      type: "EntityIntegrationConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EntityIntegrationConfigType",
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
    return EntityIntegrationConfigData.attributeTypeMap;
  }

  public constructor() {}
}
