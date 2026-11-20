import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmStatsQuery } from "./ApmStatsQuery";
import { RequestStyle } from "./RequestStyle";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequest20270101OneOf4455772256 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "apmStatsQuery": ApmStatsQuery;
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
    apmStatsQuery: {
      baseName: "apm_stats_query",
      type: "ApmStatsQuery",
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
    return DistributionBackendRequest20270101OneOf4455772256.attributeTypeMap;
  }

  public constructor() {}
}
