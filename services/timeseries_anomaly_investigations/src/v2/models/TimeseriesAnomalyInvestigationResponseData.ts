import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationResponseAttributes } from "./TimeseriesAnomalyInvestigationResponseAttributes";
import { TimeseriesAnomalyInvestigationResponseID } from "./TimeseriesAnomalyInvestigationResponseID";
import { TimeseriesAnomalyInvestigationType } from "./TimeseriesAnomalyInvestigationType";

/**
 * JSON:API resource containing anomaly investigation results.
 */
export class TimeseriesAnomalyInvestigationResponseData {
  /**
   * Attributes of an anomaly investigation response.
   */
  "attributes": TimeseriesAnomalyInvestigationResponseAttributes;
  /**
   * Stable identifier for an anomaly investigation response resource.
   */
  "id": TimeseriesAnomalyInvestigationResponseID;
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
      type: "TimeseriesAnomalyInvestigationResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "TimeseriesAnomalyInvestigationResponseID",
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
    return TimeseriesAnomalyInvestigationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
