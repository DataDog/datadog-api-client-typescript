import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesFormulaRequest } from "./TimeseriesFormulaRequest";

/**
 * A request wrapper around a single timeseries query to be executed.
 */
export class TimeseriesFormulaQueryRequest {
  /**
   * A single timeseries query to be executed.
   */
  "data": TimeseriesFormulaRequest;
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
    data: {
      baseName: "data",
      type: "TimeseriesFormulaRequest",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesFormulaQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
