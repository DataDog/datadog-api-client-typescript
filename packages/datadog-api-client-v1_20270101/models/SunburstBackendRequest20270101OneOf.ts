/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AdvancedQueryDataset } from "./AdvancedQueryDataset";
import { SunburstBackendRequestAnyOfAnyOfItemRequestType } from "./SunburstBackendRequestAnyOfAnyOfItemRequestType";
import { SunburstBackendRequestAnyOfAnyOfItemResponseFormat } from "./SunburstBackendRequestAnyOfAnyOfItemResponseFormat";
import { SunburstRequestStyle } from "./SunburstRequestStyle";
import { TabularProjection } from "./TabularProjection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstBackendRequest20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetToQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasets": Array<AdvancedQueryDataset>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": SunburstBackendRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": SunburstBackendRequestAnyOfAnyOfItemResponseFormat;
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
    datasetToQuery: {
      baseName: "dataset_to_query",
      type: "string",
      required: true,
    },
    datasets: {
      baseName: "datasets",
      type: "Array<AdvancedQueryDataset>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    requestType: {
      baseName: "request_type",
      type: "SunburstBackendRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "SunburstBackendRequestAnyOfAnyOfItemResponseFormat",
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
    return SunburstBackendRequest20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
