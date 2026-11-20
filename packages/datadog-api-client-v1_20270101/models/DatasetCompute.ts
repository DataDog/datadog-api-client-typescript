/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetCompute20270101Aggregation } from "./DatasetCompute20270101Aggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DatasetCompute {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": DatasetCompute20270101Aggregation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "interval"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "DatasetCompute20270101Aggregation",
      required: true,
    },
    column: {
      baseName: "column",
      type: "string",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatasetCompute.attributeTypeMap;
  }

  public constructor() {}
}
