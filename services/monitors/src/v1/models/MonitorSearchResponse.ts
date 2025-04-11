import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorSearchResponseCounts } from "./MonitorSearchResponseCounts";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";
import { MonitorSearchResult } from "./MonitorSearchResult";

/**
 * The response form a monitor search.
 */
export class MonitorSearchResponse {
  /**
   * The counts of monitors per different criteria.
   */
  "counts"?: MonitorSearchResponseCounts;
  /**
   * Metadata about the response.
   */
  "metadata"?: MonitorSearchResponseMetadata;
  /**
   * The list of found monitors.
   */
  "monitors"?: Array<MonitorSearchResult>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    counts: {
      baseName: "counts",
      type: "MonitorSearchResponseCounts",
    },
    metadata: {
      baseName: "metadata",
      type: "MonitorSearchResponseMetadata",
    },
    monitors: {
      baseName: "monitors",
      type: "Array<MonitorSearchResult>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
