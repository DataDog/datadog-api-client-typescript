import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SloDataSource } from "./SloDataSource";
import { SlosGroupMode } from "./SlosGroupMode";
import { SlosMeasure } from "./SlosMeasure";
import { SlosQueryType } from "./SlosQueryType";

/**
 * A query for SLO status, error budget, and burn rate metrics.
 */
export class SloQuery {
  /**
   * Additional filters applied to the SLO query.
   */
  "additionalQueryFilters"?: string;
  /**
   * A data source for SLO queries.
   */
  "dataSource": SloDataSource;
  /**
   * How SLO results are grouped in the response.
   */
  "groupMode"?: SlosGroupMode;
  /**
   * The SLO measurement to retrieve.
   */
  "measure": SlosMeasure;
  /**
   * The variable name for use in formulas.
   */
  "name"?: string;
  /**
   * The unique identifier of the SLO to query.
   */
  "sloId": string;
  /**
   * The type of SLO definition being queried.
   */
  "sloQueryType"?: SlosQueryType;
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
    additionalQueryFilters: {
      baseName: "additional_query_filters",
      type: "string",
    },
    dataSource: {
      baseName: "data_source",
      type: "SloDataSource",
      required: true,
    },
    groupMode: {
      baseName: "group_mode",
      type: "SlosGroupMode",
    },
    measure: {
      baseName: "measure",
      type: "SlosMeasure",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sloId: {
      baseName: "slo_id",
      type: "string",
      required: true,
    },
    sloQueryType: {
      baseName: "slo_query_type",
      type: "SlosQueryType",
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
    return SloQuery.attributeTypeMap;
  }

  public constructor() {}
}
