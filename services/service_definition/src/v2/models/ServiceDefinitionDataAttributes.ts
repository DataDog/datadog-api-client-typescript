import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionMeta } from "./ServiceDefinitionMeta";
import { ServiceDefinitionSchema } from "./ServiceDefinitionSchema";

/**
 * Service definition attributes.
 */
export class ServiceDefinitionDataAttributes {
  /**
   * Metadata about a service definition.
   */
  "meta"?: ServiceDefinitionMeta;
  /**
   * Service definition schema.
   */
  "schema"?: ServiceDefinitionSchema;
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
    meta: {
      baseName: "meta",
      type: "ServiceDefinitionMeta",
    },
    schema: {
      baseName: "schema",
      type: "ServiceDefinitionSchema",
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
    return ServiceDefinitionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
