import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataObservabilityMonitorRunGroup } from "./DataObservabilityMonitorRunGroup";
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
   * The number of the monitor's groups in each state, once the run has finished.
   */
  "groupCounts"?: { [key: string]: number };
  /**
   * The first 1,000 of the monitor's groups that are not ok, once the run has finished. List the monitor's groups for all of them.
   */
  "groups"?: Array<DataObservabilityMonitorRunGroup>;
  /**
   * The status of a data observability monitor run.
   */
  "status": DataObservabilityMonitorRunStatus;
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
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    groupCounts: {
      baseName: "group_counts",
      type: "{ [key: string]: number; }",
    },
    groups: {
      baseName: "groups",
      type: "Array<DataObservabilityMonitorRunGroup>",
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
