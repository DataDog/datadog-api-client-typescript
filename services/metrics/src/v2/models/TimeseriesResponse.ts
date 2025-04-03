import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesFormulaResponseType } from "./TimeseriesFormulaResponseType";
import { TimeseriesResponseAttributes } from "./TimeseriesResponseAttributes";

/**
 * A message containing the response to a timeseries query.
 */
export class TimeseriesResponse {
  /**
   * The object describing a timeseries response.
   */
  "attributes"?: TimeseriesResponseAttributes;
  /**
   * The type of the resource. The value should always be timeseries_response.
   */
  "type"?: TimeseriesFormulaResponseType;
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
      type: "TimeseriesResponseAttributes",
    },
    type: {
      baseName: "type",
      type: "TimeseriesFormulaResponseType",
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
    return TimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
