import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelQuery } from "./FunnelQuery";
import { FunnelRequestType } from "./FunnelRequestType";

/**
 * Updated funnel widget.
 */
export class FunnelWidgetRequest {
  /**
   * Updated funnel widget.
   */
  "query": FunnelQuery;
  /**
   * Widget request type.
   */
  "requestType": FunnelRequestType;
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
    query: {
      baseName: "query",
      type: "FunnelQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "FunnelRequestType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FunnelWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
