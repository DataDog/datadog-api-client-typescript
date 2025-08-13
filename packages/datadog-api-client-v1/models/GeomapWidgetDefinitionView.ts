/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The view of the world that the map should render.
 */
export class GeomapWidgetDefinitionView {
  /**
   * A custom extent of the map defined by an array of four numbers in the order `[minLongitude, minLatitude, maxLongitude, maxLatitude]`.
   */
  "customExtent"?: [number, number, number, number];
  /**
   * The ISO code of a country, sub-division, or region to focus the map on. Or `WORLD`. Mutually exclusive with `custom_extent`.
   */
  "focus": string;

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
    customExtent: {
      baseName: "custom_extent",
      type: "[number, number, number, number]",
      format: "double",
    },
    focus: {
      baseName: "focus",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapWidgetDefinitionView.attributeTypeMap;
  }

  public constructor() {}
}
