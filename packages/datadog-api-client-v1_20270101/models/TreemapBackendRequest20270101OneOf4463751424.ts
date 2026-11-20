/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TreemapBackendRequestAnyOfAnyOfItemRequestType4453528768 } from "./TreemapBackendRequestAnyOfAnyOfItemRequestType4453528768";
import { TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453529088 } from "./TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453529088";
import { TreemapRequestStyle } from "./TreemapRequestStyle";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreemapBackendRequest20270101OneOf4463751424 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ddsqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": TreemapBackendRequestAnyOfAnyOfItemRequestType4453528768;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453529088;
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
    ddsqlQuery: {
      baseName: "ddsql_query",
      type: "string",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "TreemapBackendRequestAnyOfAnyOfItemRequestType4453528768",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453529088",
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
    return TreemapBackendRequest20270101OneOf4463751424.attributeTypeMap;
  }

  public constructor() {}
}
