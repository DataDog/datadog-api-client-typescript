/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The unit used for all cost values in the response.
 */
export class BudgetAttributesCostsUnit {
  /**
   * The unit family (for example, `currency`).
   */
  "family"?: string;
  /**
   * The unique identifier for the unit.
   */
  "id"?: string;
  /**
   * The full name of the unit.
   */
  "name"?: string;
  /**
   * The plural form of the unit name.
   */
  "plural"?: string;
  /**
   * The scale factor applied to raw cost values.
   */
  "scaleFactor"?: number;
  /**
   * The abbreviated unit name.
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BudgetAttributesCostsUnit.attributeTypeMap;
  }

  public constructor() {}
}
