import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlatSortByAnyOfAnyOfItemProperty4446002432 } from "./FlatSortByAnyOfAnyOfItemProperty4446002432";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FlatSortBy20270101OneOf4456386848 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "property": FlatSortByAnyOfAnyOfItemProperty4446002432;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    order: {
      baseName: "order",
      type: "QuerySortOrder",
      required: true,
    },
    property: {
      baseName: "property",
      type: "FlatSortByAnyOfAnyOfItemProperty4446002432",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FlatSortBy20270101OneOf4456386848.attributeTypeMap;
  }

  public constructor() {}
}
