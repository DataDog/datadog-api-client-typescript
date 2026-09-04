import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationResponseData } from "./TimeseriesAnomalyInvestigationResponseData";
import { TimeseriesAnomalyInvestigationResponseMeta } from "./TimeseriesAnomalyInvestigationResponseMeta";

/**
 * Response containing the anomaly investigation results and timeseries metadata.
 */
export class TimeseriesAnomalyInvestigationResponse {
  /**
   * JSON:API resource containing anomaly investigation results.
   */
  "data": TimeseriesAnomalyInvestigationResponseData;
  /**
   * Timeseries execution metadata for the single request accepted by this API version.
   */
  "meta": TimeseriesAnomalyInvestigationResponseMeta;
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
      type: "TimeseriesAnomalyInvestigationResponseData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "TimeseriesAnomalyInvestigationResponseMeta",
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
    return TimeseriesAnomalyInvestigationResponse.attributeTypeMap;
  }

  public constructor() {}
}
