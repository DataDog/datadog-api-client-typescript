/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalsBulkTriageEventAttributes } from "./SecurityMonitoringSignalsBulkTriageEventAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single signal event entry in a bulk triage update response.
 */
export class SecurityMonitoringSignalsBulkTriageEvent {
  /**
   * Triage attributes of a security signal returned in a bulk update response.
   */
  "event": SecurityMonitoringSignalsBulkTriageEventAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id": string;

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
    event: {
      baseName: "event",
      type: "SecurityMonitoringSignalsBulkTriageEventAttributes",
      required: true,
    },
    id: {
      baseName: "id",
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
    return SecurityMonitoringSignalsBulkTriageEvent.attributeTypeMap;
  }

  public constructor() {}
}
