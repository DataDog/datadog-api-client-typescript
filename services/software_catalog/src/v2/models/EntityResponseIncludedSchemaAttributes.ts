import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3 } from "./EntityV3";

/**
 * Included schema.
 */
export class EntityResponseIncludedSchemaAttributes {
  /**
   * Entity schema v3.
   */
  "schema"?: EntityV3;
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
    schema: {
      baseName: "schema",
      type: "EntityV3",
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
    return EntityResponseIncludedSchemaAttributes.attributeTypeMap;
  }

  public constructor() {}
}
