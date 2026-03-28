import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalsBulkTriageEventAttributes } from "./SecurityMonitoringSignalsBulkTriageEventAttributes";

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
