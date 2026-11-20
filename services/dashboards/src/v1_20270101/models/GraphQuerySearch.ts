import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GraphQuerySearchFilters } from "./GraphQuerySearchFilters";
import { GraphQuerySearchJoinKeys } from "./GraphQuerySearchJoinKeys";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GraphQuerySearch {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "expression": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filters"?: GraphQuerySearchFilters;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinKeys"?: GraphQuerySearchJoinKeys;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nodes": { [key: string]: string };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "GraphQuerySearchFilters",
    },
    joinKeys: {
      baseName: "join_keys",
      type: "GraphQuerySearchJoinKeys",
    },
    nodes: {
      baseName: "nodes",
      type: "{ [key: string]: string; }",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GraphQuerySearch.attributeTypeMap;
  }

  public constructor() {}
}
