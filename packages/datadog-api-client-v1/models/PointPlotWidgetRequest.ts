/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataProjectionQuery } from "./DataProjectionQuery";
import { DataProjectionRequestType } from "./DataProjectionRequestType";
import { PointPlotProjection } from "./PointPlotProjection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request configuration for the point plot widget.
 */
export class PointPlotWidgetRequest {
  /**
   * Maximum number of data points to return.
   */
  "limit"?: number;
  /**
   * Projection configuration for the point plot widget.
   */
  "projection": PointPlotProjection;
  /**
   * Query configuration for a data projection request.
   */
  "query": DataProjectionQuery;
  /**
   * Type of a data projection request.
   */
  "requestType": DataProjectionRequestType;

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
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    projection: {
      baseName: "projection",
      type: "PointPlotProjection",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DataProjectionQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "DataProjectionRequestType",
      required: true,
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
    return PointPlotWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
