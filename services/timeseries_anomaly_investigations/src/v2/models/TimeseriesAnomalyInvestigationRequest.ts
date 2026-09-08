import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationRequestData } from "./TimeseriesAnomalyInvestigationRequestData";

/**
 * Request to investigate a metrics timeseries for anomalies.
 */
export class TimeseriesAnomalyInvestigationRequest {
  /**
   * JSON:API resource containing an anomaly investigation request.
   */
  "data": TimeseriesAnomalyInvestigationRequestData;
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
      type: "TimeseriesAnomalyInvestigationRequestData",
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
    return TimeseriesAnomalyInvestigationRequest.attributeTypeMap;
  }

  public constructor() {}
}
