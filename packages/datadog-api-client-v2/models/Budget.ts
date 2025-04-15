/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Budget.
 */
export class Budget {
  /**
   * The timestamp when the budget was created.
   */
  "createdAt"?: number;
  /**
   * The id of the user that created the budget.
   */
  "createdBy"?: string;
  /**
   * The month when the budget ends.
   */
  "endMonth"?: number;
  /**
   * The id of the budget.
   */
  "id"?: string;
  /**
   * The cost query for to track against the budget.
   */
  "metricsQuery"?: string;
  /**
   * The name of the budget.
   */
  "name"?: string;
  /**
   * The Id of the Org the budget belongs to.
   */
  "orgId"?: number;
  /**
   * The month when the budget starts.
   */
  "startMonth"?: number;
  /**
   * The tags for which the budget is created.
   */
  "tags"?: Array<string>;
  /**
   * The sum of all budget entries amounts.
   */
  "totalAmount"?: number;
  /**
   * The timestamp when the budget was last updated.
   */
  "updatedAt"?: number;
  /**
   * The id of the user that created the budget.
   */
  "updatedBy"?: string;

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
      type: "number",
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    endMonth: {
      baseName: "end_month",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    metricsQuery: {
      baseName: "metrics_query",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    startMonth: {
      baseName: "start_month",
      type: "number",
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    totalAmount: {
      baseName: "total_amount",
      type: "number",
      format: "double",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "number",
      format: "int64",
    },
    updatedBy: {
      baseName: "updated_by",
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
    return Budget.attributeTypeMap;
  }

  public constructor() {}
}
