/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TabularProjection } from "./TabularProjection";
import { TreemapBackendRequest20270101OneOfQuery } from "./TreemapBackendRequest20270101OneOfQuery";
import { TreemapBackendRequestAnyOfAnyOfItemRequestType4453530208 } from "./TreemapBackendRequestAnyOfAnyOfItemRequestType4453530208";
import { TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453530528 } from "./TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453530528";
import { TreemapRequestStyle } from "./TreemapRequestStyle";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreemapBackendRequest20270101OneOf4463752384 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": TreemapBackendRequest20270101OneOfQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": TreemapBackendRequestAnyOfAnyOfItemRequestType4453530208;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453530528;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: TreemapRequestStyle;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    query: {
      baseName: "query",
      type: "TreemapBackendRequest20270101OneOfQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "TreemapBackendRequestAnyOfAnyOfItemRequestType4453530208",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453530528",
      required: true,
    },
    style: {
      baseName: "style",
      type: "TreemapRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreemapBackendRequest20270101OneOf4463752384.attributeTypeMap;
  }

  public constructor() {}
}
