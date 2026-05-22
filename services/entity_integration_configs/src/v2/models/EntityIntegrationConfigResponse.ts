import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityIntegrationConfigData } from "./EntityIntegrationConfigData";

/**
 * JSON:API document containing a single entity integration configuration resource.
 */
export class EntityIntegrationConfigResponse {
  /**
   * JSON:API resource object for an entity integration configuration.
   */
  "data": EntityIntegrationConfigData;
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
      type: "EntityIntegrationConfigData",
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
    return EntityIntegrationConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
