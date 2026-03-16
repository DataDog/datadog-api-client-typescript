import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3 } from "./EntityV3";

/**
 * A recommended entity with its schema definition.
 */
export class RecommendedEntityWithSchema {
  /**
   * Unique identifier for the recommended entity.
   */
  "id": string;
  /**
   * Entity schema v3.
   */
  "schema": EntityV3;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    schema: {
      baseName: "schema",
      type: "EntityV3",
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
    return RecommendedEntityWithSchema.attributeTypeMap;
  }

  public constructor() {}
}
