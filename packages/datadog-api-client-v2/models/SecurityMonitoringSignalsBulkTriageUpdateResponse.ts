/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalsBulkTriageUpdateResult } from "./SecurityMonitoringSignalsBulkTriageUpdateResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a bulk triage update of security signals.
 */
export class SecurityMonitoringSignalsBulkTriageUpdateResponse {
  /**
   * The result payload of a bulk signal triage update.
   */
  "result": SecurityMonitoringSignalsBulkTriageUpdateResult;
  /**
   * The status of the bulk operation.
   */
  "status": string;
  /**
   * The type of the response.
   */
  "type": string;

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
    result: {
      baseName: "result",
      type: "SecurityMonitoringSignalsBulkTriageUpdateResult",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return SecurityMonitoringSignalsBulkTriageUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
