import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryDefinitionSearch } from "./FormulaAndFunctionEventQueryDefinitionSearch";
import { FormulaAndFunctionEventQueryGroupByConfig } from "./FormulaAndFunctionEventQueryGroupByConfig";
import { FormulaAndFunctionEventsDataSource } from "./FormulaAndFunctionEventsDataSource";

/**
 * A formula and functions events query.
 */
export class FormulaAndFunctionEventQueryDefinition {
  /**
   * Compute options.
   */
  "compute": FormulaAndFunctionEventQueryDefinitionCompute;
  /**
   * The source organization UUID for cross organization queries. Feature in Private Beta.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Data source for event platform-based queries.
   */
  "dataSource": FormulaAndFunctionEventsDataSource;
  /**
   * Group by configuration for a formula and functions events query. Can be a list of facet objects or a flat object with a list of fields.
   */
  "groupBy"?: FormulaAndFunctionEventQueryGroupByConfig;
  /**
   * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
   */
  "indexes"?: Array<string>;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Search options.
   */
  "search"?: FormulaAndFunctionEventQueryDefinitionSearch;
  /**
   * Option for storage location. Feature in Private Beta.
   */
  "storage"?: string;
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
      type: "FormulaAndFunctionEventQueryDefinitionCompute",
      required: true,
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionEventsDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "FormulaAndFunctionEventQueryGroupByConfig",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "FormulaAndFunctionEventQueryDefinitionSearch",
    },
    storage: {
      baseName: "storage",
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
    return FormulaAndFunctionEventQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
