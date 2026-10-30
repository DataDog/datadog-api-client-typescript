/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapInlineColumnKindString } from "./TopologyMapInlineColumnKindString";
import { TopologyMapInlineNodeStringColumnId } from "./TopologyMapInlineNodeStringColumnId";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
