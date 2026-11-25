/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A unit of measure from the Datadog unit catalog, or `null` when no unit is set.
 */
export class MetricMetadataUnit {
  /**
   * Unit family, such as `bytes`, `time`, or `percentage`.
   */
  "family": string;
  /**
   * Full name of the unit, such as `byte`.
   */
  "name": string;
  /**
   * Plural form of the unit name.
   */
  "plural": string;
  /**
   * Factor that converts a value in this unit to the base unit of its family.
   */
  "scaleFactor": number;
  /**
   * Abbreviated unit name, or `null` if the unit has none.
   */
  "shortName": string | null;

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
    family: {
      baseName: "family",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    plural: {
      baseName: "plural",
      type: "string",
      required: true,
    },
    scaleFactor: {
      baseName: "scale_factor",
      type: "number",
      required: true,
      format: "double",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
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
    return MetricMetadataUnit.attributeTypeMap;
  }

  public constructor() {}
}
