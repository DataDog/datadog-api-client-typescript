import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogQueryDefinition } from "./LogQueryDefinition";
import { RequestStyle } from "./RequestStyle";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequest20270101OneOf4455771616 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: RequestStyle;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "syntheticsTestRuns": LogQueryDefinition;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    style: {
      baseName: "style",
      type: "RequestStyle",
    },
    syntheticsTestRuns: {
      baseName: "synthetics_test_runs",
      type: "LogQueryDefinition",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionBackendRequest20270101OneOf4455771616.attributeTypeMap;
  }

  public constructor() {}
}
