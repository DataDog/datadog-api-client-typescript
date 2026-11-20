/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardInlineSchema42 } from "./DashboardInlineSchema42";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
