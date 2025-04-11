import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseIncludedRawSchemaAttributes } from "./EntityResponseIncludedRawSchemaAttributes";
import { EntityResponseIncludedRawSchemaType } from "./EntityResponseIncludedRawSchemaType";

/**
 * Included raw schema.
 */
export class EntityResponseIncludedRawSchema {
  /**
   * Included raw schema attributes.
   */
  "attributes"?: EntityResponseIncludedRawSchemaAttributes;
  /**
   * Raw schema ID.
   */
  "id"?: string;
  /**
   * Raw schema type.
   */
  "type"?: EntityResponseIncludedRawSchemaType;
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
      type: "EntityResponseIncludedRawSchemaAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EntityResponseIncludedRawSchemaType",
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
    return EntityResponseIncludedRawSchema.attributeTypeMap;
  }

  public constructor() {}
}
