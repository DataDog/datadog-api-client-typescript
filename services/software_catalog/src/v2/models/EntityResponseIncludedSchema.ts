import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseIncludedSchemaAttributes } from "./EntityResponseIncludedSchemaAttributes";
import { EntityResponseIncludedSchemaType } from "./EntityResponseIncludedSchemaType";

/**
 * Included detail entity schema.
 */
export class EntityResponseIncludedSchema {
  /**
   * Included schema.
   */
  "attributes"?: EntityResponseIncludedSchemaAttributes;
  /**
   * Entity ID.
   */
  "id"?: string;
  /**
   * Schema type.
   */
  "type"?: EntityResponseIncludedSchemaType;
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
      type: "EntityResponseIncludedSchemaAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EntityResponseIncludedSchemaType",
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
    return EntityResponseIncludedSchema.attributeTypeMap;
  }

  public constructor() {}
}
