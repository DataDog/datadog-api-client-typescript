import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a signal investigation.
 */
export class SecurityMonitoringSignalInvestigationRequestAttributes {
  /**
   * Optional deployment override for the investigation.
   */
  "deployment"?: string;
  /**
   * The unique ID of the security signal.
   */
  "signalId": string;
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
    deployment: {
      baseName: "deployment",
      type: "string",
    },
    signalId: {
      baseName: "signal_id",
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
    return SecurityMonitoringSignalInvestigationRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
