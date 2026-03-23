/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A unit definition for metric values.
 */
export class ProductAnalyticsUnit {
  /**
   * The unit family (e.g., time, bytes).
   */
  "family"?: string;
  /**
   * Numeric identifier for the unit.
   */
  "id"?: number;
  /**
   * The full name of the unit (e.g., nanosecond).
   */
  "name"?: string;
  /**
   * Plural form of the unit name (e.g., nanoseconds).
   */
  "plural"?: string;
  /**
   * Conversion factor relative to the base unit of the family.
   */
  "scaleFactor"?: number;
  /**
   * Abbreviated unit name (e.g., ns).
   */
  "shortName"?: string;

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
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsUnit.attributeTypeMap;
  }

  public constructor() {}
}
