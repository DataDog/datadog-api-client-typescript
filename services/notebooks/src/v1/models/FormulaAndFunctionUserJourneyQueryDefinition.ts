import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelDataSource } from "./ProductAnalyticsFunnelDataSource";
import { UserJourneyFormulaCompute } from "./UserJourneyFormulaCompute";
import { UserJourneyFormulaGroupBy } from "./UserJourneyFormulaGroupBy";
import { UserJourneySearch } from "./UserJourneySearch";

/**
 * A formula and functions User Journey query for defining funnel, timeseries, and scalar visualizations over journey data.
 */
export class FormulaAndFunctionUserJourneyQueryDefinition {
  /**
   * Compute configuration for User Journey formula queries.
   */
  "compute": UserJourneyFormulaCompute;
  /**
   * Data source for user journey funnel queries.
   */
  "dataSource": ProductAnalyticsFunnelDataSource;
  /**
   * Group by configuration.
   */
  "groupBy"?: Array<UserJourneyFormulaGroupBy>;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * User journey search configuration.
   */
  "search": UserJourneySearch;
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
    compute: {
      baseName: "compute",
      type: "UserJourneyFormulaCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "ProductAnalyticsFunnelDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<UserJourneyFormulaGroupBy>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "UserJourneySearch",
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
    return FormulaAndFunctionUserJourneyQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
