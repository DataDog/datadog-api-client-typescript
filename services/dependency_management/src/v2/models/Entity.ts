import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An entity participating in the dependency upgrade workflow.
 */
export class Entity {
  /**
   * The kind of the entity (for example, service or package).
   */
  "entityKind"?: string;
  /**
   * The name of the entity.
   */
  "entityName": string;
  /**
   * The namespace of the entity.
   */
  "entityNamespace"?: string;
  /**
   * The team that owns the entity.
   */
  "entityTeam"?: string;
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
    entityKind: {
      baseName: "entity_kind",
      type: "string",
    },
    entityName: {
      baseName: "entity_name",
      type: "string",
      required: true,
    },
    entityNamespace: {
      baseName: "entity_namespace",
      type: "string",
    },
    entityTeam: {
      baseName: "entity_team",
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
    return Entity.attributeTypeMap;
  }

  public constructor() {}
}
