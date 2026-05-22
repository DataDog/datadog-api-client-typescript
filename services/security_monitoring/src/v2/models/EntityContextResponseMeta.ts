import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityContextPage } from "./EntityContextPage";

/**
 * Metadata returned alongside the entity context response.
 */
export class EntityContextResponseMeta {
  /**
   * Pagination metadata for the entity context response.
   */
  "page": EntityContextPage;
  /**
   * The total number of entities matching the query, irrespective of pagination.
   */
  "totalCount": number;
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
    page: {
      baseName: "page",
      type: "EntityContextPage",
      required: true,
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      required: true,
      format: "int32",
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
    return EntityContextResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
