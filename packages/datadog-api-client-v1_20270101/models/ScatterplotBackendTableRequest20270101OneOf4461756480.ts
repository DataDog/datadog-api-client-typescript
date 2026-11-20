/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsPlatformDataProjectionQuery } from "./EventsPlatformDataProjectionQuery";
import { ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451375104 } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451375104";
import { ScatterplotProjection } from "./ScatterplotProjection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotBackendTableRequest20270101OneOf4461756480 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection": ScatterplotProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": EventsPlatformDataProjectionQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451375104;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    projection: {
      baseName: "projection",
      type: "ScatterplotProjection",
      required: true,
    },
    query: {
      baseName: "query",
      type: "EventsPlatformDataProjectionQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451375104",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotBackendTableRequest20270101OneOf4461756480.attributeTypeMap;
  }

  public constructor() {}
}
