import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JourneyMapQuery } from "./JourneyMapQuery";
import { JourneyMapRequestType } from "./JourneyMapRequestType";

/**
 * Journey Paths widget request.
 */
export class JourneyMapWidgetRequest {
  /**
   * Journey Paths query definition.
   */
  "query": JourneyMapQuery;
  /**
   * Request type for the Journey Paths widget.
   */
  "requestType": JourneyMapRequestType;
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
      type: "JourneyMapQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "JourneyMapRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JourneyMapWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
