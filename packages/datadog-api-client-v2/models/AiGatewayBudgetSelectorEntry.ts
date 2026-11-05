/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * One dimension rule in a template budget selector.
 */
export class AiGatewayBudgetSelectorEntry {
  /**
   * Dimension to match: user_id, team_id, model, provider, or tag:<key>. Reserved metadata tag keys are rejected.
   */
  "dim": string;
  /**
   * Separate counters by the matched value when true. Otherwise, pool spend within the other separated dimensions.
   */
  "perValue": boolean;
  /**
   * Allowed dimension values. Omit to match any value, including an absent dimension. An explicit list must contain at least one value.
   */
  "values"?: Array<string>;

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
    dim: {
      baseName: "dim",
      type: "string",
      required: true,
    },
    perValue: {
      baseName: "per_value",
      type: "boolean",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return AiGatewayBudgetSelectorEntry.attributeTypeMap;
  }

  public constructor() {}
}
