/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PointPlotProjectionDimension } from "./PointPlotProjectionDimension";
import { PointPlotProjectionType } from "./PointPlotProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Projection configuration for the point plot widget.
 */
export class PointPlotProjection {
  /**
   * List of dimension mappings for the projection.
   */
  "dimensions": Array<PointPlotProjectionDimension>;
  /**
   * Additional columns to include in the projection.
   */
  "extraColumns"?: Array<string>;
  /**
   * Type of the projection.
   */
  "type": PointPlotProjectionType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "Array<PointPlotProjectionDimension>",
      required: true,
    },
    extraColumns: {
      baseName: "extra_columns",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "PointPlotProjectionType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PointPlotProjection.attributeTypeMap;
  }

  public constructor() {}
}
