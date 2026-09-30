import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityContextEntity } from "./EntityContextEntity";

/**
 * Response from the recently updated entities endpoint, containing the entities with the most recent updates in the requested time range, ordered from most to least recently updated.
 */
export class RecentlyUpdatedEntitiesResponse {
  /**
   * The list of entities with the most recent updates, ordered from most to least recently updated.
   */
  "data": Array<EntityContextEntity>;
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
    data: {
      baseName: "data",
      type: "Array<EntityContextEntity>",
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
    return RecentlyUpdatedEntitiesResponse.attributeTypeMap;
  }

  public constructor() {}
}
