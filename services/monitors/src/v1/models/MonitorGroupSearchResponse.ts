import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorGroupSearchResponseCounts } from "./MonitorGroupSearchResponseCounts";
import { MonitorGroupSearchResult } from "./MonitorGroupSearchResult";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";

/**
 * The response of a monitor group search.
 */
export class MonitorGroupSearchResponse {
  /**
   * The counts of monitor groups per different criteria.
   */
  "counts"?: MonitorGroupSearchResponseCounts;
  /**
   * The list of found monitor groups.
   */
  "groups"?: Array<MonitorGroupSearchResult>;
  /**
   * Metadata about the response.
   */
  "metadata"?: MonitorSearchResponseMetadata;
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
      type: "MonitorGroupSearchResponseCounts",
    },
    groups: {
      baseName: "groups",
      type: "Array<MonitorGroupSearchResult>",
    },
    metadata: {
      baseName: "metadata",
      type: "MonitorSearchResponseMetadata",
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
    return MonitorGroupSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
