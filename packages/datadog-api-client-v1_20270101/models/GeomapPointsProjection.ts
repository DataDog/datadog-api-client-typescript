/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeomapPointsProjectionDimensionsItems } from "./GeomapPointsProjectionDimensionsItems";
import { GeomapPointsProjectionType } from "./GeomapPointsProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapPointsProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<GeomapPointsProjectionDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": GeomapPointsProjectionType;

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
      type: "Array<GeomapPointsProjectionDimensionsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GeomapPointsProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapPointsProjection.attributeTypeMap;
  }

  public constructor() {}
}
