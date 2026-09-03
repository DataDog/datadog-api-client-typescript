/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterplotDataProjectionDimension } from "./ScatterplotDataProjectionDimension";
import { ScatterplotDataProjectionProjectionType } from "./ScatterplotDataProjectionProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The projection configuration for a scatterplot data projection request.
 */
export class ScatterplotDataProjectionProjection {
  /**
   * Dimension mappings for the scatterplot axes.
   */
  "dimensions": Array<ScatterplotDataProjectionDimension>;
  /**
   * The type of the scatterplot data projection.
   */
  "type": ScatterplotDataProjectionProjectionType;

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
      type: "Array<ScatterplotDataProjectionDimension>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ScatterplotDataProjectionProjectionType",
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
    return ScatterplotDataProjectionProjection.attributeTypeMap;
  }

  public constructor() {}
}
