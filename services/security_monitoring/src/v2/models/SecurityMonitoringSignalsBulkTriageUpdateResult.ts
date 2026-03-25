import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalsBulkTriageEvent } from "./SecurityMonitoringSignalsBulkTriageEvent";

/**
 * The result payload of a bulk signal triage update.
 */
export class SecurityMonitoringSignalsBulkTriageUpdateResult {
  /**
   * The number of signals updated.
   */
  "count": number;
  /**
   * The list of updated signals.
   */
  "events": Array<SecurityMonitoringSignalsBulkTriageEvent>;
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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    events: {
      baseName: "events",
      type: "Array<SecurityMonitoringSignalsBulkTriageEvent>",
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
    return SecurityMonitoringSignalsBulkTriageUpdateResult.attributeTypeMap;
  }

  public constructor() {}
}
