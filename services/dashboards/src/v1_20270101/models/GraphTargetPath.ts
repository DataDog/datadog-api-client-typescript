import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GraphTargetPathType } from "./GraphTargetPathType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GraphTargetPath {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "end"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "start": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": GraphTargetPathType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    end: {
      baseName: "end",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GraphTargetPathType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GraphTargetPath.attributeTypeMap;
  }

  public constructor() {}
}
