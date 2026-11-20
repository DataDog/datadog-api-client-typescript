/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeomapStylePalette } from "./GeomapStylePalette";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette": GeomapStylePalette;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "paletteFlip": boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    palette: {
      baseName: "palette",
      type: "GeomapStylePalette",
      required: true,
    },
    paletteFlip: {
      baseName: "palette_flip",
      type: "boolean",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapStyle.attributeTypeMap;
  }

  public constructor() {}
}
