import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesFormulaRequestAttributes } from "./TimeseriesFormulaRequestAttributes";
import { TimeseriesFormulaRequestType } from "./TimeseriesFormulaRequestType";

/**
 * A single timeseries query to be executed.
 */
export class TimeseriesFormulaRequest {
  /**
   * The object describing a timeseries formula request.
   */
  "attributes": TimeseriesFormulaRequestAttributes;
  /**
   * The type of the resource. The value should always be timeseries_request.
   */
  "type": TimeseriesFormulaRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "TimeseriesFormulaRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimeseriesFormulaRequestType",
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
    return TimeseriesFormulaRequest.attributeTypeMap;
  }

  public constructor() {}
}
