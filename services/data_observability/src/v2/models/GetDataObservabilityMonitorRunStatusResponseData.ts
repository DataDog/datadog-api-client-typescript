import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataObservabilityMonitorRunType } from "./DataObservabilityMonitorRunType";
import { GetDataObservabilityMonitorRunStatusResponseAttributes } from "./GetDataObservabilityMonitorRunStatusResponseAttributes";

/**
 * The data object for a data observability monitor run status response.
 */
export class GetDataObservabilityMonitorRunStatusResponseData {
  /**
   * The attributes of a data observability monitor run status response.
   */
  "attributes": GetDataObservabilityMonitorRunStatusResponseAttributes;
  /**
   * The unique identifier of the monitor run.
   */
  "id": string;
  /**
   * The JSON:API resource type for a data observability monitor run.
   */
  "type": DataObservabilityMonitorRunType;
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
      type: "GetDataObservabilityMonitorRunStatusResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DataObservabilityMonitorRunType",
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
    return GetDataObservabilityMonitorRunStatusResponseData.attributeTypeMap;
  }

  public constructor() {}
}
