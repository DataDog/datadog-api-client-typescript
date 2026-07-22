import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataObservabilityMonitorRunStatus } from "./DataObservabilityMonitorRunStatus";

/**
 * The attributes of a data observability monitor run status response.
 */
export class GetDataObservabilityMonitorRunStatusResponseAttributes {
  /**
   * Error message describing why the monitor run failed. Only present when status is error.
   */
  "errorMessage"?: string;
  /**
   * The status of a data observability monitor run.
   */
  "status": DataObservabilityMonitorRunStatus;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "DataObservabilityMonitorRunStatus",
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
    return GetDataObservabilityMonitorRunStatusResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
