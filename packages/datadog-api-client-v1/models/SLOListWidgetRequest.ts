/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOListWidgetQuery } from "./SLOListWidgetQuery";
import { SLOListWidgetRequestType } from "./SLOListWidgetRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };
}
