import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityContextEntity } from "./EntityContextEntity";
import { EntityContextResponseMeta } from "./EntityContextResponseMeta";

/**
 * Response from the entity context endpoint, containing the matching entities and pagination metadata.
 */
export class EntityContextResponse {
  /**
   * The list of entities matching the query.
   */
  "data": Array<EntityContextEntity>;
  /**
   * Metadata returned alongside the entity context response.
   */
  "meta": EntityContextResponseMeta;
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
    meta: {
      baseName: "meta",
      type: "EntityContextResponseMeta",
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
    return EntityContextResponse.attributeTypeMap;
  }

  public constructor() {}
}
