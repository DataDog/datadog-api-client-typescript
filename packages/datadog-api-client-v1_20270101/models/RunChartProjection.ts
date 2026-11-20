/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RunChartProjectionDimension } from "./RunChartProjectionDimension";
import { RunChartProjectionType } from "./RunChartProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RunChartProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<RunChartProjectionDimension>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": RunChartProjectionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dimensions: {
      baseName: "dimensions",
      type: "Array<RunChartProjectionDimension>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RunChartProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RunChartProjection.attributeTypeMap;
  }

  public constructor() {}
}
