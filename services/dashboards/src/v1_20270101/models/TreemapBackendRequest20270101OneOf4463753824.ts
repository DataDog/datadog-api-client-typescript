import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TreemapRequestStyle } from "./TreemapRequestStyle";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreemapBackendRequest20270101OneOf4463753824 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "q": string;
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
    q: {
      baseName: "q",
      type: "string",
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
    return TreemapBackendRequest20270101OneOf4463753824.attributeTypeMap;
  }

  public constructor() {}
}
