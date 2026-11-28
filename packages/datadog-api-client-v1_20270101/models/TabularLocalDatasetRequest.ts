/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TabularLocalDatasetRequest20270101Query } from "./TabularLocalDatasetRequest20270101Query";
import { TabularLocalDatasetRequestRequestType } from "./TabularLocalDatasetRequestRequestType";
import { TabularLocalDatasetRequestResponseFormat } from "./TabularLocalDatasetRequestResponseFormat";
import { TabularProjection } from "./TabularProjection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TabularLocalDatasetRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": TabularLocalDatasetRequest20270101Query;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": TabularLocalDatasetRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TabularLocalDatasetRequestResponseFormat;

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
      type: "TabularLocalDatasetRequest20270101Query",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "TabularLocalDatasetRequestRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TabularLocalDatasetRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TabularLocalDatasetRequest.attributeTypeMap;
  }

  public constructor() {}
}
