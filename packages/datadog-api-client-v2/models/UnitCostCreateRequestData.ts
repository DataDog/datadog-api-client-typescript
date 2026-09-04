/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnitCostRequestAttributes } from "./UnitCostRequestAttributes";
import { UnitCostType } from "./UnitCostType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object of a unit cost create request.
 */
export class UnitCostCreateRequestData {
  /**
   * The attributes of a unit cost create or replace request.
   */
  "attributes": UnitCostRequestAttributes;
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
    return UnitCostCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
