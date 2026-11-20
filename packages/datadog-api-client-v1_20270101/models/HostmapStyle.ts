/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostmapStylePalette } from "./HostmapStylePalette";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fillMax"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fillMin"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: HostmapStylePalette;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "paletteFlip"?: boolean;

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
      type: "HostmapStylePalette",
    },
    paletteFlip: {
      baseName: "palette_flip",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostmapStyle.attributeTypeMap;
  }

  public constructor() {}
}
