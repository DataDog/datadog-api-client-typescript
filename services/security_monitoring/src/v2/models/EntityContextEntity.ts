import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityContextEntityAttributes } from "./EntityContextEntityAttributes";

/**
 * A single entity returned by the entity context endpoint.
 */
export class EntityContextEntity {
  /**
   * The attributes of an entity context entry, grouping all the historical revisions of the entity.
   */
  "attributes": EntityContextEntityAttributes;
  /**
   * The unique identifier of the entity.
   */
  "id": string;
  /**
   * The type of the entity. Reflects the underlying entity kind from the entity context store
   * (for example, `siem_entity_identity` for identities). Defaults to `entity` when the kind is unknown.
   */
  "type": string;
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
      type: "EntityContextEntityAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return EntityContextEntity.attributeTypeMap;
  }

  public constructor() {}
}
