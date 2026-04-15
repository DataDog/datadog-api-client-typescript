import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionGridRequestType } from "./RetentionGridRequestType";
import { RetentionQuery } from "./RetentionQuery";

/**
 * Retention grid widget request.
 */
export class RetentionGridRequest {
  /**
   * Retention query definition.
   */
  "query": RetentionQuery;
  /**
   * Request type for retention grid widget.
   */
  "requestType": RetentionGridRequestType;
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
      type: "RetentionGridRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionGridRequest.attributeTypeMap;
  }

  public constructor() {}
}
