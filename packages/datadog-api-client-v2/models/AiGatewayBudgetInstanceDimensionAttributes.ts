/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayBudgetInstanceDimensionValue } from "./AiGatewayBudgetInstanceDimensionValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Values of one budget split dimension.
 */
export class AiGatewayBudgetInstanceDimensionAttributes {
  /**
   * Budget identifier.
   */
  "budgetId": string;
  /**
   * Split dimension name, as used in `split_dims` and the `split_dim` filter.
   */
  "dim": string;
  /**
   * Whether identifying instance details were withheld. Aggregate totals still include restricted instances.
   */
  "restrictedDetails": boolean;
  /**
   * Whether more values matched than were returned. Narrow the results with `query` or `value` to see them.
   */
  "truncated": boolean;
  /**
   * Values of this dimension across matching instance counters, highest spend first and at most `limit` of them. Values are counted under every `split_dim` filter except the one for this dimension.
   */
  "values": Array<AiGatewayBudgetInstanceDimensionValue>;
  /**
   * Start of the accounting window.
   */
  "windowStart": Date;

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
    budgetId: {
      baseName: "budget_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    dim: {
      baseName: "dim",
      type: "string",
      required: true,
    },
    restrictedDetails: {
      baseName: "restricted_details",
      type: "boolean",
      required: true,
    },
    truncated: {
      baseName: "truncated",
      type: "boolean",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<AiGatewayBudgetInstanceDimensionValue>",
      required: true,
    },
    windowStart: {
      baseName: "window_start",
      type: "Date",
      required: true,
      format: "date-time",
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
    return AiGatewayBudgetInstanceDimensionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
