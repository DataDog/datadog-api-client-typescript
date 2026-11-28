/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogQueryDefinition } from "./LogQueryDefinition";
import { TimeseriesRequestStyle } from "./TimeseriesRequestStyle";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { WidgetDisplayType } from "./WidgetDisplayType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesWidgetLegacyProfileMetricsRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "displayType"?: WidgetDisplayType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metadata"?: Array<TimeseriesWidgetExpressionAlias>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "onRightYaxis"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "profilemetricsQuery": LogQueryDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: TimeseriesRequestStyle;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    displayType: {
      baseName: "display_type",
      type: "WidgetDisplayType",
    },
    metadata: {
      baseName: "metadata",
      type: "Array<TimeseriesWidgetExpressionAlias>",
    },
    onRightYaxis: {
      baseName: "on_right_yaxis",
      type: "boolean",
    },
    profilemetricsQuery: {
      baseName: "profilemetrics_query",
      type: "LogQueryDefinition",
      required: true,
    },
    style: {
      baseName: "style",
      type: "TimeseriesRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesWidgetLegacyProfileMetricsRequest.attributeTypeMap;
  }

  public constructor() {}
}
