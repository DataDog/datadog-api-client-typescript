import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOListWidgetQuery } from "./SLOListWidgetQuery";
import { SLOListWidgetRequestType } from "./SLOListWidgetRequestType";

/**
 * Updated SLO List widget.
 */
export class SLOListWidgetRequest {
  /**
   * Updated SLO List widget.
   */
  "query": SLOListWidgetQuery;
  /**
   * Widget request type.
   */
  "requestType": SLOListWidgetRequestType;
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
      type: "SLOListWidgetQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "SLOListWidgetRequestType",
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
    return SLOListWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
