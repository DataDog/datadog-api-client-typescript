import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Auto-close inactive cases settings
 */
export class AutoCloseInactiveCases {
  /**
   * Whether auto-close is enabled
   */
  "enabled"?: boolean;
  /**
   * Maximum inactive time in seconds before auto-closing
   */
  "maxInactiveTimeInSecs"?: number;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    maxInactiveTimeInSecs: {
      baseName: "max_inactive_time_in_secs",
      type: "number",
      format: "int64",
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
    return AutoCloseInactiveCases.attributeTypeMap;
  }

  public constructor() {}
}
