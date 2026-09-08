import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationRequestAttributes } from "./TimeseriesAnomalyInvestigationRequestAttributes";
import { TimeseriesAnomalyInvestigationType } from "./TimeseriesAnomalyInvestigationType";

/**
 * JSON:API resource containing an anomaly investigation request.
 */
export class TimeseriesAnomalyInvestigationRequestData {
  /**
   * Attributes of an anomaly investigation request.
   */
  "attributes": TimeseriesAnomalyInvestigationRequestAttributes;
  /**
   * Resource type for a timeseries anomaly investigation.
   */
  "type": TimeseriesAnomalyInvestigationType;
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
      type: "TimeseriesAnomalyInvestigationRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimeseriesAnomalyInvestigationType",
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
    return TimeseriesAnomalyInvestigationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
