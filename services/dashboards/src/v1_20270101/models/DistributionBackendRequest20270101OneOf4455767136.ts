import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogQueryDefinition } from "./LogQueryDefinition";
import { RequestStyle } from "./RequestStyle";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequest20270101OneOf4455767136 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "eventQuery": LogQueryDefinition;
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
    eventQuery: {
      baseName: "event_query",
      type: "LogQueryDefinition",
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
    return DistributionBackendRequest20270101OneOf4455767136.attributeTypeMap;
  }

  public constructor() {}
}
