/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConditionOperator } from "./ConditionOperator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Targeting condition details.
 */
export class Condition {
  /**
   * The user or request attribute to evaluate.
   */
  "attribute": string;
  /**
   * The timestamp when the condition was created.
   */
  "createdAt": Date;
  /**
   * The unique identifier of the condition.
   */
  "id": string;
  /**
   * The operator used in a targeting condition.
   */
  "operator": ConditionOperator;
  /**
   * The timestamp when the condition was last updated.
   */
  "updatedAt": Date;
  /**
   * Values used by the selected operator.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    operator: {
      baseName: "operator",
      type: "ConditionOperator",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return Condition.attributeTypeMap;
  }

  public constructor() {}
}
