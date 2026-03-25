/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SankeyRumQuery } from "./SankeyRumQuery";
import { SankeyWidgetDefinitionType } from "./SankeyWidgetDefinitionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Sankey widget with RUM data source.
 */
export class SankeyRumRequest {
  /**
   * Sankey widget with RUM data source query.
   */
  "query": SankeyRumQuery;
  /**
   * Type of the Sankey widget.
   */
  "requestType": SankeyWidgetDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    query: {
      baseName: "query",
      type: "SankeyRumQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "SankeyWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyRumRequest.attributeTypeMap;
  }

  public constructor() {}
}
