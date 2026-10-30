import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapInlineColumnKindString } from "./TopologyMapInlineColumnKindString";
import { TopologyMapInlineNodeStringColumnId } from "./TopologyMapInlineNodeStringColumnId";

/**
 * Column of node text.
 */
export class TopologyMapInlineNodeStringColumn {
  /**
   * Node field the column fills. `title` is bold text at the top of the node; `subtitle` is smaller text below it.
   */
  "id": TopologyMapInlineNodeStringColumnId;
  /**
   * Column of strings.
   */
  "kind": TopologyMapInlineColumnKindString;
  /**
   * Text for each node. A null `title` shows the node's ID; a null `subtitle` shows no subtitle.
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
      type: "TopologyMapInlineNodeStringColumnId",
      required: true,
    },
    kind: {
      baseName: "kind",
      type: "TopologyMapInlineColumnKindString",
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
    return TopologyMapInlineNodeStringColumn.attributeTypeMap;
  }

  public constructor() {}
}
