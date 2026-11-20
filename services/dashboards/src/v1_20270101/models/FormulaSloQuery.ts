import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaSloQueryDataSource } from "./FormulaSloQueryDataSource";
import { SloGroupMode } from "./SloGroupMode";
import { SloMeasure } from "./SloMeasure";
import { SloQueryType } from "./SloQueryType";
import { SloTimeWindow } from "./SloTimeWindow";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaSloQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "additionalQueryFilters"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "applyCorrections"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaSloQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupMode": SloGroupMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "measure": SloMeasure;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sloId": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sloQueryType": SloQueryType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sloTimeWindow"?: SloTimeWindow;
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
    applyCorrections: {
      baseName: "apply_corrections",
      type: "boolean",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaSloQueryDataSource",
      required: true,
    },
    groupMode: {
      baseName: "group_mode",
      type: "SloGroupMode",
      required: true,
    },
    measure: {
      baseName: "measure",
      type: "SloMeasure",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    sloId: {
      baseName: "slo_id",
      type: "string",
      required: true,
    },
    sloQueryType: {
      baseName: "slo_query_type",
      type: "SloQueryType",
      required: true,
    },
    sloTimeWindow: {
      baseName: "slo_time_window",
      type: "SloTimeWindow",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaSloQuery.attributeTypeMap;
  }

  public constructor() {}
}
