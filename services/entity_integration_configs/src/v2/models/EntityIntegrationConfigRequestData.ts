import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityIntegrationConfigRequestAttributes } from "./EntityIntegrationConfigRequestAttributes";
import { EntityIntegrationConfigRequestType } from "./EntityIntegrationConfigRequestType";

/**
 * JSON:API resource object used in a request to create or update an entity integration configuration.
 */
export class EntityIntegrationConfigRequestData {
  /**
   * Attributes used to create or update an entity integration configuration.
   */
  "attributes": EntityIntegrationConfigRequestAttributes;
  /**
   * JSON:API resource type for the entity integration configuration create or update request. Always `entity_integration_config_requests`.
   */
  "type": EntityIntegrationConfigRequestType;
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
      type: "EntityIntegrationConfigRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EntityIntegrationConfigRequestType",
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
    return EntityIntegrationConfigRequestData.attributeTypeMap;
  }

  public constructor() {}
}
