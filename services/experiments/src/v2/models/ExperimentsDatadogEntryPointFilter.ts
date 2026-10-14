import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsDatadogEntryPointFilterColumnType } from "./ExperimentsDatadogEntryPointFilterColumnType";
import { ExperimentsDatadogEntryPointFilterOperation } from "./ExperimentsDatadogEntryPointFilterOperation";

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
  "columnType": ExperimentsDatadogEntryPointFilterColumnType;
  /**
   * Comparison applied by the Datadog entry-point filter.
   */
  "operation": ExperimentsDatadogEntryPointFilterOperation;
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
      type: "ExperimentsDatadogEntryPointFilterColumnType",
      required: true,
    },
    operation: {
      baseName: "operation",
      type: "ExperimentsDatadogEntryPointFilterOperation",
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
