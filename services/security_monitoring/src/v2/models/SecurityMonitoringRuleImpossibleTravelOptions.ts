import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Options on impossible travel detection method.
 */
export class SecurityMonitoringRuleImpossibleTravelOptions {
  /**
   * If true, signals are suppressed for the first 24 hours. In that time, Datadog learns the user's regular
   * access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access.
   */
  "baselineUserLocations"?: boolean;
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
    baselineUserLocations: {
      baseName: "baselineUserLocations",
      type: "boolean",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringRuleImpossibleTravelOptions.attributeTypeMap;
  }

  public constructor() {}
}
