import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardInlineSchema40 } from "./DashboardInlineSchema40";
import { FormulaDatasetDataSource } from "./FormulaDatasetDataSource";
import { FormulaDatasetFormulasItems } from "./FormulaDatasetFormulasItems";
import { FormulaDatasetResponseFormat } from "./FormulaDatasetResponseFormat";
import { TimeWindow } from "./TimeWindow";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaDataset {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaDatasetDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formulas": Array<FormulaDatasetFormulasItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queries": Array<DashboardInlineSchema40>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": FormulaDatasetResponseFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeWindow"?: TimeWindow;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "FormulaDatasetDataSource",
      required: true,
    },
    formulas: {
      baseName: "formulas",
      type: "Array<FormulaDatasetFormulasItems>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<DashboardInlineSchema40>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "FormulaDatasetResponseFormat",
      required: true,
    },
    timeWindow: {
      baseName: "time_window",
      type: "TimeWindow",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaDataset.attributeTypeMap;
  }

  public constructor() {}
}
