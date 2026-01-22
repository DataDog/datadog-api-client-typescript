import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetWithEntriesDataAttributesEntriesItems } from "./BudgetWithEntriesDataAttributesEntriesItems";

export class BudgetWithEntriesDataAttributes {
  "createdAt"?: number;
  "createdBy"?: string;
  "endMonth"?: number;
  "entries"?: Array<BudgetWithEntriesDataAttributesEntriesItems>;
  "metricsQuery"?: string;
  "name"?: string;
  "orgId"?: number;
  "startMonth"?: number;
  "totalAmount"?: number;
  "updatedAt"?: number;
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
    entries: {
      baseName: "entries",
      type: "Array<BudgetWithEntriesDataAttributesEntriesItems>",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BudgetWithEntriesDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
