/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionGridRequestType } from "./RetentionGridRequestType";
import { RetentionQuery } from "./RetentionQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
