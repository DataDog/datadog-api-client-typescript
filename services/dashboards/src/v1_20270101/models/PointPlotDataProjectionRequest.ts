import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsPlatformDataProjectionQuery } from "./EventsPlatformDataProjectionQuery";
import { PointPlotDataProjectionRequestRequestType } from "./PointPlotDataProjectionRequestRequestType";
import { PointPlotProjection } from "./PointPlotProjection";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class PointPlotDataProjectionRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection": PointPlotProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": EventsPlatformDataProjectionQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": PointPlotDataProjectionRequestRequestType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    projection: {
      baseName: "projection",
      type: "PointPlotProjection",
      required: true,
    },
    query: {
      baseName: "query",
      type: "EventsPlatformDataProjectionQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "PointPlotDataProjectionRequestRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PointPlotDataProjectionRequest.attributeTypeMap;
  }

  public constructor() {}
}
