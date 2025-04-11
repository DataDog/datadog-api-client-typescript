import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Related entity attributes.
 */
export class EntityResponseIncludedRelatedEntityAttributes {
  /**
   * Entity kind.
   */
  "kind"?: string;
  /**
   * Entity name.
   */
  "name"?: string;
  /**
   * Entity namespace.
   */
  "namespace"?: string;
  /**
   * Entity relation type to the associated entity.
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
    kind: {
      baseName: "kind",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    namespace: {
      baseName: "namespace",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return EntityResponseIncludedRelatedEntityAttributes.attributeTypeMap;
  }

  public constructor() {}
}
