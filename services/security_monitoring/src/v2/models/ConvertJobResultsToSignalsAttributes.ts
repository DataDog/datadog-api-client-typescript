import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";

/**
 * Attributes for converting historical job results to signals.
 */
export class ConvertJobResultsToSignalsAttributes {
  /**
   * Request ID.
   */
  "id"?: string;
  /**
   * Job result IDs.
   */
  "jobResultIds": Array<string>;
  /**
   * Notifications sent.
   */
  "notifications": Array<string>;
  /**
   * Message of generated signals.
   */
  "signalMessage": string;
  /**
   * Severity of the Security Signal.
   */
  "signalSeverity": SecurityMonitoringRuleSeverity;
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
    id: {
      baseName: "id",
      type: "string",
    },
    jobResultIds: {
      baseName: "jobResultIds",
      type: "Array<string>",
      required: true,
    },
    notifications: {
      baseName: "notifications",
      type: "Array<string>",
      required: true,
    },
    signalMessage: {
      baseName: "signalMessage",
      type: "string",
      required: true,
    },
    signalSeverity: {
      baseName: "signalSeverity",
      type: "SecurityMonitoringRuleSeverity",
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
    return ConvertJobResultsToSignalsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
