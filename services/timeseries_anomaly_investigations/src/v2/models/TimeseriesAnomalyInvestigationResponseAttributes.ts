import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationResult } from "./TimeseriesAnomalyInvestigationResult";

/**
 * Attributes of an anomaly investigation response.
 */
export class TimeseriesAnomalyInvestigationResponseAttributes {
  /**
   * Results returned in the same order as the submitted requests. This API version returns exactly one result.
   */
  "results": [TimeseriesAnomalyInvestigationResult];
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
    results: {
      baseName: "results",
      type: "[TimeseriesAnomalyInvestigationResult]",
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
    return TimeseriesAnomalyInvestigationResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
