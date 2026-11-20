import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { RequestStyle } from "./RequestStyle";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequest20270101OneOf4455772896 {
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
    return DistributionBackendRequest20270101OneOf4455772896.attributeTypeMap;
  }

  public constructor() {}
}
