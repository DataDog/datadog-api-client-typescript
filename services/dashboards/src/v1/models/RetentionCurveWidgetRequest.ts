import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionCurveRequestType } from "./RetentionCurveRequestType";
import { RetentionCurveStyle } from "./RetentionCurveStyle";
import { RetentionQuery } from "./RetentionQuery";

/**
 * Retention curve widget request.
 */
export class RetentionCurveWidgetRequest {
  /**
   * Retention query definition.
   */
  "query": RetentionQuery;
  /**
   * Request type for retention curve widget.
   */
  "requestType": RetentionCurveRequestType;
  /**
   * Style configuration for retention curve.
   */
  "style"?: RetentionCurveStyle;
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
      type: "RetentionQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "RetentionCurveRequestType",
      required: true,
    },
    style: {
      baseName: "style",
      type: "RetentionCurveStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionCurveWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
