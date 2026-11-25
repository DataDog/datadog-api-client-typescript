import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregateCompute } from "./AggregateCompute";
import { CompositeEventsPlatformQuerySearch } from "./CompositeEventsPlatformQuerySearch";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventsDataSource } from "./FormulaAndFunctionEventsDataSource";
import { ListColumn } from "./ListColumn";
import { StorageType } from "./StorageType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeEventsPlatformQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns"?: Array<ListColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute"?: Array<AggregateCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "computeCount"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaAndFunctionEventsDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<FormulaAndFunctionEventQueryGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search"?: CompositeEventsPlatformQuerySearch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "storage"?: StorageType;
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
    columns: {
      baseName: "columns",
      type: "Array<ListColumn>",
    },
    compute: {
      baseName: "compute",
      type: "Array<AggregateCompute>",
    },
    computeCount: {
      baseName: "compute_count",
      type: "boolean",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionEventsDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<FormulaAndFunctionEventQueryGroupBy>",
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
      type: "CompositeEventsPlatformQuerySearch",
    },
    storage: {
      baseName: "storage",
      type: "StorageType",
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
    return CompositeEventsPlatformQuery.attributeTypeMap;
  }

  public constructor() {}
}
