import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapInlineNodeValueColumnKind } from "./CustomTopologyMapInlineNodeValueColumnKind";
import { CustomTopologyMapInlineNodeValueColumnMeta } from "./CustomTopologyMapInlineNodeValueColumnMeta";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapInlineNodeValueColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "id": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "kind": CustomTopologyMapInlineNodeValueColumnKind;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "meta"?: CustomTopologyMapInlineNodeValueColumnMeta;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "values": Array<number | null>;
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
      type: "string",
      required: true,
    },
    kind: {
      baseName: "kind",
      type: "CustomTopologyMapInlineNodeValueColumnKind",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CustomTopologyMapInlineNodeValueColumnMeta",
    },
    values: {
      baseName: "values",
      type: "Array<number>",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapInlineNodeValueColumn.attributeTypeMap;
  }

  public constructor() {}
}
