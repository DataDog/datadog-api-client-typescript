/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SavedFilterConditionOperator } from "./SavedFilterConditionOperator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An inline condition in a saved filter targeting rule.
 */
export class SavedFilterCondition {
  /**
   * The attribute evaluated by the condition.
   */
  "attribute": string;
  /**
   * The ID of the condition.
   */
  "id": string;
  /**
   * The comparison operator used by a saved filter condition.
   */
  "operator": SavedFilterConditionOperator;
  /**
   * Values used by the condition operator.
   */
  "value": Array<string>;

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
    attribute: {
      baseName: "attribute",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    operator: {
      baseName: "operator",
      type: "SavedFilterConditionOperator",
      required: true,
    },
    value: {
      baseName: "value",
      type: "Array<string>",
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
    return SavedFilterCondition.attributeTypeMap;
  }

  public constructor() {}
}
