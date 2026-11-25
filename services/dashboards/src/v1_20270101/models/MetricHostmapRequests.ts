import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HostmapTileDefFillRequest } from "./HostmapTileDefFillRequest";
import { HostmapTileDefSizeRequest } from "./HostmapTileDefSizeRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class MetricHostmapRequests {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fill"?: HostmapTileDefFillRequest;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "size"?: HostmapTileDefSizeRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fill: {
      baseName: "fill",
      type: "HostmapTileDefFillRequest",
    },
    size: {
      baseName: "size",
      type: "HostmapTileDefSizeRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricHostmapRequests.attributeTypeMap;
  }

  public constructor() {}
}
