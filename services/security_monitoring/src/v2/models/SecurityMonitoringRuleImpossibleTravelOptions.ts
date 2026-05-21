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
   * The duration in days during which Datadog learns the user's regular access locations. After this period, signals are generated for accesses from unknown locations.
   */
  "baselineUserLocationsDuration"?: number;
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
    baselineUserLocationsDuration: {
      baseName: "baselineUserLocationsDuration",
      type: "number",
      format: "int32",
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
    return SecurityMonitoringRuleImpossibleTravelOptions.attributeTypeMap;
  }

  public constructor() {}
}
