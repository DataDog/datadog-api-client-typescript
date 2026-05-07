import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyRumQuery } from "./SankeyRumQuery";
import { SankeyWidgetDefinitionType } from "./SankeyWidgetDefinitionType";

/**
 * Sankey widget request for Product Analytics or RUM data source.
 */
export class SankeyRumRequest {
  /**
   * Query configuration for Product Analytics or RUM Sankey widget.
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
