import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostAnomaliesResponseDataType } from "./CostAnomaliesResponseDataType";
import { CostAnomaly } from "./CostAnomaly";

/**
 * Resource wrapper for a single cost anomaly.
 */
export class CostAnomalyResponseData {
  /**
   * A single detected Cloud Cost Management anomaly.
   */
  "attributes": CostAnomaly;
  /**
   * The unique identifier of the anomaly.
   */
  "id": string;
  /**
   * Type of the cost anomalies collection resource. Must be `anomalies`.
   */
  "type": CostAnomaliesResponseDataType;
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
      type: "CostAnomaly",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostAnomaliesResponseDataType",
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
    return CostAnomalyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
