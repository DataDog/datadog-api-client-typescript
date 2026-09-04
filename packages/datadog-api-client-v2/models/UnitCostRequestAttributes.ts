/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnitCostQueryDefinition } from "./UnitCostQueryDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a unit cost create or replace request.
 */
export class UnitCostRequestAttributes {
  /**
   * A timeseries object containing `queries` and `formulas` arrays.
   */
  "denominatorQuery": UnitCostQueryDefinition;
  /**
   * An optional description of the unit cost. At most 2000 characters.
   */
  "description"?: string;
  /**
   * The name of the unit cost. At most 200 characters.
   */
  "name": string;
  /**
   * A timeseries object containing `queries` and `formulas` arrays.
   */
  "numeratorQuery": UnitCostQueryDefinition;
  /**
   * The label describing the denominator unit, for example `user`. At most 100 characters.
   */
  "unitLabel": string;

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
    denominatorQuery: {
      baseName: "denominator_query",
      type: "UnitCostQueryDefinition",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    numeratorQuery: {
      baseName: "numerator_query",
      type: "UnitCostQueryDefinition",
      required: true,
    },
    unitLabel: {
      baseName: "unit_label",
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
    return UnitCostRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
