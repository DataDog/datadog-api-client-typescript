import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityIntegrationConfigRequestData } from "./EntityIntegrationConfigRequestData";

/**
 * Request body used to create or replace the configuration for a given integration.
 */
export class EntityIntegrationConfigRequest {
  /**
   * JSON:API resource object used in a request to create or update an entity integration configuration.
   */
  "data": EntityIntegrationConfigRequestData;
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
    data: {
      baseName: "data",
      type: "EntityIntegrationConfigRequestData",
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
    return EntityIntegrationConfigRequest.attributeTypeMap;
  }

  public constructor() {}
}
