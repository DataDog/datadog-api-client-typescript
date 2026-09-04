/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnitCostQueryDefinition } from "./UnitCostQueryDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a unit cost.
 */
export class UnitCostDataAttributesResponse {
  /**
   * The time the unit cost was created.
   */
  "createdAt": Date;
  /**
   * The UUID of the user who created the unit cost.
   */
  "createdBy": string;
  /**
   * A timeseries object containing `queries` and `formulas` arrays.
   */
  "denominatorQuery": UnitCostQueryDefinition;
  /**
   * The data source of the denominator queries, or `multisource` when the denominator
   * queries span more than one data source.
   */
  "denominatorType": string;
  /**
   * The description of the unit cost. Omitted when the unit cost has no description.
   */
  "description"?: string;
  /**
   * The name of the unit cost.
   */
  "name": string;
  /**
   * A timeseries object containing `queries` and `formulas` arrays.
   */
  "numeratorQuery": UnitCostQueryDefinition;
  /**
   * The ID of the organization the unit cost belongs to.
   */
  "orgId": number;
  /**
   * The label describing the denominator unit.
   */
  "unitLabel": string;
  /**
   * The time the unit cost was last updated.
   */
  "updatedAt": Date;
  /**
   * The UUID of the user who last updated the unit cost.
   */
  "updatedBy": string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
      format: "uuid",
    },
    denominatorQuery: {
      baseName: "denominator_query",
      type: "UnitCostQueryDefinition",
      required: true,
    },
    denominatorType: {
      baseName: "denominator_type",
      type: "string",
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
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    unitLabel: {
      baseName: "unit_label",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "string",
      required: true,
      format: "uuid",
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
    return UnitCostDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
