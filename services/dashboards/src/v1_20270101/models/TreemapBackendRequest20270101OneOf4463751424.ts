import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TreemapBackendRequestAnyOfAnyOfItemRequestType4453528768 } from "./TreemapBackendRequestAnyOfAnyOfItemRequestType4453528768";
import { TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453529088 } from "./TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453529088";
import { TreemapRequestStyle } from "./TreemapRequestStyle";

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
