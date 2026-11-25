import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardInlineSchema42 } from "./DashboardInlineSchema42";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapTileDefSizeRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryOptions"?: { [key: string]: DashboardInlineSchema42 };
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "q": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    queryOptions: {
      baseName: "_query_options",
      type: "{ [key: string]: DashboardInlineSchema42; }",
    },
    q: {
      baseName: "q",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostmapTileDefSizeRequest.attributeTypeMap;
  }

  public constructor() {}
}
