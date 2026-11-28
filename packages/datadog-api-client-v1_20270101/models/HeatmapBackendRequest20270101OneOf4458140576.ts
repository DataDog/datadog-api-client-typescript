/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatmapBackendRequestAnyOfAnyOfItemQuery } from "./HeatmapBackendRequestAnyOfAnyOfItemQuery";
import { HeatmapBackendRequestAnyOfAnyOfItemRequestType } from "./HeatmapBackendRequestAnyOfAnyOfItemRequestType";
import { RequestStyle } from "./RequestStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatmapBackendRequest20270101OneOf4458140576 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": HeatmapBackendRequestAnyOfAnyOfItemQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": HeatmapBackendRequestAnyOfAnyOfItemRequestType;
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
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    query: {
      baseName: "query",
      type: "HeatmapBackendRequestAnyOfAnyOfItemQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "HeatmapBackendRequestAnyOfAnyOfItemRequestType",
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
    return HeatmapBackendRequest20270101OneOf4458140576.attributeTypeMap;
  }

  public constructor() {}
}
