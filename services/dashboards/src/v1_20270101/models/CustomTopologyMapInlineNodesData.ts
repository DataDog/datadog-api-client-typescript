import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapInlineNodeColumn } from "./CustomTopologyMapInlineNodeColumn";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapInlineNodesData {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<CustomTopologyMapInlineNodeColumn>;
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
      type: "Array<CustomTopologyMapInlineNodeColumn>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapInlineNodesData.attributeTypeMap;
  }

  public constructor() {}
}
