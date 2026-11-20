import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AdvancedQueryDataset } from "./AdvancedQueryDataset";
import { TimeseriesProjection } from "./TimeseriesProjection";
import { TimeseriesRequestStyle } from "./TimeseriesRequestStyle";
import { TimeseriesWidgetAdvancedQueryRequestRequestType } from "./TimeseriesWidgetAdvancedQueryRequestRequestType";
import { TimeseriesWidgetAdvancedQueryRequestResponseFormat } from "./TimeseriesWidgetAdvancedQueryRequestResponseFormat";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { WidgetDisplayType } from "./WidgetDisplayType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesWidgetAdvancedQueryRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetToQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasets": Array<AdvancedQueryDataset>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "displayType"?: WidgetDisplayType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
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
  "requestType": TimeseriesWidgetAdvancedQueryRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TimeseriesWidgetAdvancedQueryRequestResponseFormat;
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
    datasetToQuery: {
      baseName: "dataset_to_query",
      type: "string",
      required: true,
    },
    datasets: {
      baseName: "datasets",
      type: "Array<AdvancedQueryDataset>",
      required: true,
    },
    displayType: {
      baseName: "display_type",
      type: "WidgetDisplayType",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
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
    requestType: {
      baseName: "request_type",
      type: "TimeseriesWidgetAdvancedQueryRequestRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TimeseriesWidgetAdvancedQueryRequestResponseFormat",
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
    return TimeseriesWidgetAdvancedQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
