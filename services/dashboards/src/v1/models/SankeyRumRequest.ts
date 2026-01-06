import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyRumQuery } from "./SankeyRumQuery";
import { SankeyWidgetDefinitionType } from "./SankeyWidgetDefinitionType";

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
