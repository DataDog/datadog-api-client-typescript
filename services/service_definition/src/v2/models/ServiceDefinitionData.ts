import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionDataAttributes } from "./ServiceDefinitionDataAttributes";

/**
 * Service definition data.
 */
export class ServiceDefinitionData {
  /**
   * Service definition attributes.
   */
  "attributes"?: ServiceDefinitionDataAttributes;
  /**
   * Service definition id.
   */
  "id"?: string;
  /**
   * Service definition type.
   */
  "type"?: string;
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
      type: "ServiceDefinitionDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionData.attributeTypeMap;
  }

  public constructor() {}
}
