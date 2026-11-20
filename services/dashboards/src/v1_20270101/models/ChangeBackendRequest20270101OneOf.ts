import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeBackendRequestAnyOfAnyOfItemResponseFormat } from "./ChangeBackendRequestAnyOfAnyOfItemResponseFormat";
import { ChangeTypeOptions } from "./ChangeTypeOptions";
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { OrderByOptions } from "./OrderByOptions";
import { QuerySortOrder } from "./QuerySortOrder";
import { ScalarFormulaSort } from "./ScalarFormulaSort";
import { WidgetFormula } from "./WidgetFormula";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ChangeBackendRequest20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "changeType"?: ChangeTypeOptions;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "increaseGood"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "orderBy"?: OrderByOptions;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "orderDir"?: QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ChangeBackendRequestAnyOfAnyOfItemResponseFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showPresent"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ScalarFormulaSort;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    changeType: {
      baseName: "change_type",
      type: "ChangeTypeOptions",
    },
    formulas: {
      baseName: "formulas",
      type: "Array<WidgetFormula>",
    },
    increaseGood: {
      baseName: "increase_good",
      type: "boolean",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    orderBy: {
      baseName: "order_by",
      type: "OrderByOptions",
    },
    orderDir: {
      baseName: "order_dir",
      type: "QuerySortOrder",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ChangeBackendRequestAnyOfAnyOfItemResponseFormat",
      required: true,
    },
    showPresent: {
      baseName: "show_present",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "ScalarFormulaSort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeBackendRequest20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
