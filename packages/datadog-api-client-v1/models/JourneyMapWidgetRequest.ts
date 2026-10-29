/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JourneyMapQuery } from "./JourneyMapQuery";
import { JourneyMapRequestType } from "./JourneyMapRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
