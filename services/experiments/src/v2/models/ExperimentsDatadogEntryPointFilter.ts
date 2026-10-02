import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType";
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsOperation } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsOperation";

/**
 * Complete Datadog OR-of-ANDs entry-point filter expression.
 */
export class ExperimentsDatadogEntryPointFilter {
  /**
   * Exposure field evaluated by the entry-point filter.
   */
  "column": string;
  /**
   * Data type of the column evaluated by the entry-point filter.
   */
  "columnType": ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType;
  /**
   * Comparison applied by the Datadog entry-point filter.
   */
  "operation": ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsOperation;
  /**
   * Comparison values used by the filter operation.
   */
  "values": Array<string>;
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
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    columnType: {
      baseName: "column_type",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType",
      required: true,
    },
    operation: {
      baseName: "operation",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsOperation",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return ExperimentsDatadogEntryPointFilter.attributeTypeMap;
  }

  public constructor() {}
}
