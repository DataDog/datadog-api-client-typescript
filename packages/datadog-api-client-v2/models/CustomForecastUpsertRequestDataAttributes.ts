/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomForecastEntry } from "./CustomForecastEntry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a custom forecast upsert request.
 */
export class CustomForecastUpsertRequestDataAttributes {
  /**
   * The UUID of the budget that this custom forecast belongs to.
   */
  "budgetUid": string;
  /**
   * Monthly custom forecast entries. An empty list deletes any existing
   * custom forecast for the budget.
   */
  "entries": Array<CustomForecastEntry>;

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
    budgetUid: {
      baseName: "budget_uid",
      type: "string",
      required: true,
    },
    entries: {
      baseName: "entries",
      type: "Array<CustomForecastEntry>",
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
    return CustomForecastUpsertRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
