/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnitCostRequestAttributes } from "./UnitCostRequestAttributes";
import { UnitCostType } from "./UnitCostType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object of a unit cost replace request.
 */
export class UnitCostUpdateRequestData {
  /**
   * The attributes of a unit cost create or replace request.
   */
  "attributes": UnitCostRequestAttributes;
  /**
   * The UUID of the unit cost being replaced. Must match the `unit_cost_id` path parameter.
   */
  "id": string;
  /**
   * The JSON:API resource type for a unit cost.
   */
  "type": UnitCostType;

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
    attributes: {
      baseName: "attributes",
      type: "UnitCostRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "UnitCostType",
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
    return UnitCostUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
