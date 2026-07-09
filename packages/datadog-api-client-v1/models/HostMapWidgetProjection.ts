/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostMapWidgetProjectionDimensionMapping } from "./HostMapWidgetProjectionDimensionMapping";
import { HostMapWidgetProjectionType } from "./HostMapWidgetProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Projection for the DDSQL host map request. Maps dataset columns to map dimensions: `node` identifies the entity, repeated `group` entries define the grouping hierarchy (outermost first), and `fill`/`size` drive the tile color and size.
 */
export class HostMapWidgetProjection {
  /**
   * List of column-to-dimension mappings for the projection.
   */
  "dimensions": Array<HostMapWidgetProjectionDimensionMapping>;
  /**
   * Type of the host map projection.
   */
  "type": HostMapWidgetProjectionType;

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
      type: "Array<HostMapWidgetProjectionDimensionMapping>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HostMapWidgetProjectionType",
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
    return HostMapWidgetProjection.attributeTypeMap;
  }

  public constructor() {}
}
