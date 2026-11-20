import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapInlineEdgeColumn } from "./CustomTopologyMapInlineEdgeColumn";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapInlineEdgesData {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<CustomTopologyMapInlineEdgeColumn>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<CustomTopologyMapInlineEdgeColumn>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapInlineEdgesData.attributeTypeMap;
  }

  public constructor() {}
}
