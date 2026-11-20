import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { RequestStyle } from "./RequestStyle";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatmapBackendRequest20270101OneOf4458139936 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "processQuery": ProcessQueryDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: RequestStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    processQuery: {
      baseName: "process_query",
      type: "ProcessQueryDefinition",
      required: true,
    },
    style: {
      baseName: "style",
      type: "RequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatmapBackendRequest20270101OneOf4458139936.attributeTypeMap;
  }

  public constructor() {}
}
