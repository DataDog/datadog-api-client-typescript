/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapBackendDefinitionStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fillMax"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fillMin"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;
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
      type: "string",
    },
    fillMin: {
      baseName: "fill_min",
      type: "string",
    },
    palette: {
      baseName: "palette",
      type: "string",
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
    return HostmapBackendDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
