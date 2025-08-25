/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BudgetAttributes } from "./BudgetAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A budget and all its entries.
 */
export class BudgetWithEntriesData {
  /**
   * The attributes of a budget.
   */
  "attributes"?: BudgetAttributes;
  /**
   * The `BudgetWithEntriesData` `id`.
   */
  "id"?: string;
  /**
   * The type of the object, must be `budget`.
   */
  "type"?: string;

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
      type: "BudgetAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BudgetWithEntriesData.attributeTypeMap;
  }

  public constructor() {}
}
