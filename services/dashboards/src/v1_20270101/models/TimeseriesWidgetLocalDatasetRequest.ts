import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisQuery } from "./StructuredAnalysisQuery";
import { TimeseriesProjection } from "./TimeseriesProjection";
import { TimeseriesRequestStyle } from "./TimeseriesRequestStyle";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { TimeseriesWidgetLocalDatasetRequestRequestType } from "./TimeseriesWidgetLocalDatasetRequestRequestType";
import { TimeseriesWidgetLocalDatasetRequestResponseFormat } from "./TimeseriesWidgetLocalDatasetRequestResponseFormat";
import { WidgetDisplayType } from "./WidgetDisplayType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesWidgetLocalDatasetRequest {
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
  "projection"?: TimeseriesProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": StructuredAnalysisQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": TimeseriesWidgetLocalDatasetRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TimeseriesWidgetLocalDatasetRequestResponseFormat;
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
    projection: {
      baseName: "projection",
      type: "TimeseriesProjection",
    },
    query: {
      baseName: "query",
      type: "StructuredAnalysisQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "TimeseriesWidgetLocalDatasetRequestRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TimeseriesWidgetLocalDatasetRequestResponseFormat",
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
    return TimeseriesWidgetLocalDatasetRequest.attributeTypeMap;
  }

  public constructor() {}
}
