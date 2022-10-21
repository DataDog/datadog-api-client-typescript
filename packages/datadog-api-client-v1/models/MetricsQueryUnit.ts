/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the metric unit family, scale factor, name, and short name.
 */
export class MetricsQueryUnit {
  /**
   * Unit family, allows for conversion between units of the same family, for scaling.
   */
  "family"?: string;
  /**
   * Unit name
   */
  "name"?: string;
  /**
   * Plural form of the unit name.
   */
  "plural"?: string;
  /**
   * Factor for scaling between units of the same family.
   */
  "scaleFactor"?: number;
  /**
   * Abbreviation of the unit.
   */
  "shortName"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    family: {
      baseName: "family",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    plural: {
      baseName: "plural",
      type: "string",
    },
    scaleFactor: {
      baseName: "scale_factor",
      type: "number",
      format: "double",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricsQueryUnit.attributeTypeMap;
  }

  public constructor() {}
}
