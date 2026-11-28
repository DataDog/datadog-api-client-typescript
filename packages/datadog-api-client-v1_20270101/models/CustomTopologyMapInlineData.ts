/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomTopologyMapInlineEdgesData } from "./CustomTopologyMapInlineEdgesData";
import { CustomTopologyMapInlineNodesData } from "./CustomTopologyMapInlineNodesData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapInlineData {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "edges"?: CustomTopologyMapInlineEdgesData;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nodes"?: CustomTopologyMapInlineNodesData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    edges: {
      baseName: "edges",
      type: "CustomTopologyMapInlineEdgesData",
    },
    nodes: {
      baseName: "nodes",
      type: "CustomTopologyMapInlineNodesData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapInlineData.attributeTypeMap;
  }

  public constructor() {}
}
