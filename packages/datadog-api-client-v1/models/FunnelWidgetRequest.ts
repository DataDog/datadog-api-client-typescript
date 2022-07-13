/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelQuery } from "./FunnelQuery";
import { FunnelRequestType } from "./FunnelRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FunnelWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
