/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomTopologyMapInlineNodeColumn } from "./CustomTopologyMapInlineNodeColumn";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
