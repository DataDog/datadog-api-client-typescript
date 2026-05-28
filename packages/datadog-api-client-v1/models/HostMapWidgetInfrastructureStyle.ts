/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Style configuration for the infrastructure host map.
 */
export class HostMapWidgetInfrastructureStyle {
  /**
   * Maximum value for the fill color scale. Omit to use automatic scaling.
   */
  "fillMax"?: number;
  /**
   * Minimum value for the fill color scale. Omit to use automatic scaling.
   */
  "fillMin"?: number;
  /**
   * Color palette name or alias.
   */
  "palette"?: string;
  /**
   * Whether to invert the color palette.
   */
  "paletteFlip"?: boolean;

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
    fillMax: {
      baseName: "fill_max",
      type: "number",
      format: "double",
    },
    fillMin: {
      baseName: "fill_min",
      type: "number",
      format: "double",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    paletteFlip: {
      baseName: "palette_flip",
      type: "boolean",
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
    return HostMapWidgetInfrastructureStyle.attributeTypeMap;
  }

  public constructor() {}
}
