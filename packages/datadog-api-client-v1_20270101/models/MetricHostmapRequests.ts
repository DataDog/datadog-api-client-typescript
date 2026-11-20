/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostmapTileDefFillRequest } from "./HostmapTileDefFillRequest";
import { HostmapTileDefSizeRequest } from "./HostmapTileDefSizeRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
