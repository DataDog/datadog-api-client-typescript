import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityContextRevision } from "./EntityContextRevision";

/**
 * The attributes of an entity context entry, grouping all the historical revisions of the entity.
 */
export class EntityContextEntityAttributes {
  /**
   * The historical revisions of the entity, ordered chronologically.
   */
  "revisions": Array<EntityContextRevision>;
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
    revisions: {
      baseName: "revisions",
      type: "Array<EntityContextRevision>",
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
    return EntityContextEntityAttributes.attributeTypeMap;
  }

  public constructor() {}
}
