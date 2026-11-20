/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstBackendRequest20270101OneOfQuery } from "./SunburstBackendRequest20270101OneOfQuery";
import { SunburstBackendRequestAnyOfAnyOfItemRequestType4452231072 } from "./SunburstBackendRequestAnyOfAnyOfItemRequestType4452231072";
import { SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452231392 } from "./SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452231392";
import { SunburstRequestStyle } from "./SunburstRequestStyle";
import { TabularProjection } from "./TabularProjection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstBackendRequest20270101OneOf4462424800 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": SunburstBackendRequest20270101OneOfQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": SunburstBackendRequestAnyOfAnyOfItemRequestType4452231072;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452231392;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: SunburstRequestStyle;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    query: {
      baseName: "query",
      type: "SunburstBackendRequest20270101OneOfQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "SunburstBackendRequestAnyOfAnyOfItemRequestType4452231072",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452231392",
      required: true,
    },
    style: {
      baseName: "style",
      type: "SunburstRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstBackendRequest20270101OneOf4462424800.attributeTypeMap;
  }

  public constructor() {}
}
