/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomTopologyMapInlineNodeIdColumnId } from "./CustomTopologyMapInlineNodeIdColumnId";
import { CustomTopologyMapInlineNodeIdColumnKind } from "./CustomTopologyMapInlineNodeIdColumnKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapInlineNodeIdColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "id": CustomTopologyMapInlineNodeIdColumnId;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "kind": CustomTopologyMapInlineNodeIdColumnKind;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "values": Array<string>;

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
      type: "CustomTopologyMapInlineNodeIdColumnId",
      required: true,
    },
    kind: {
      baseName: "kind",
      type: "CustomTopologyMapInlineNodeIdColumnKind",
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
    return CustomTopologyMapInlineNodeIdColumn.attributeTypeMap;
  }

  public constructor() {}
}
