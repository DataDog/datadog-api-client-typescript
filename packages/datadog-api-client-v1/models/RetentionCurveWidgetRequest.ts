/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionCurveRequestType } from "./RetentionCurveRequestType";
import { RetentionCurveStyle } from "./RetentionCurveStyle";
import { RetentionQuery } from "./RetentionQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
