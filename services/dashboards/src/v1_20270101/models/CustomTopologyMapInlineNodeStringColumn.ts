import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapInlineNodeStringColumnId } from "./CustomTopologyMapInlineNodeStringColumnId";
import { CustomTopologyMapInlineNodeStringColumnKind } from "./CustomTopologyMapInlineNodeStringColumnKind";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapInlineNodeStringColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "id": CustomTopologyMapInlineNodeStringColumnId;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "kind": CustomTopologyMapInlineNodeStringColumnKind;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "values": Array<string | null>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "CustomTopologyMapInlineNodeStringColumnId",
      required: true,
    },
    kind: {
      baseName: "kind",
      type: "CustomTopologyMapInlineNodeStringColumnKind",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapInlineNodeStringColumn.attributeTypeMap;
  }

  public constructor() {}
}
