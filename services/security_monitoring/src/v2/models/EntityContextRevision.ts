import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single historical revision of an entity, including the time range during which the revision was observed.
 */
export class EntityContextRevision {
  /**
   * The set of attributes recorded for the entity at this revision. The keys depend on the kind of entity.
   */
  "attributes": { [key: string]: any };
  /**
   * The first time the entity was observed at this revision.
   */
  "firstSeenAt": Date;
  /**
   * The last time the entity was observed at this revision.
   */
  "lastSeenAt": Date;
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
      type: "{ [key: string]: any; }",
      required: true,
    },
    firstSeenAt: {
      baseName: "first_seen_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    lastSeenAt: {
      baseName: "last_seen_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return EntityContextRevision.attributeTypeMap;
  }

  public constructor() {}
}
