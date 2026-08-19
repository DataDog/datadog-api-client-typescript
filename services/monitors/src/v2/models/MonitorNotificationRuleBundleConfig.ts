import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Use bundle config to enable alert bundling to reduce monitor signal noises. **Note**: This feature is in preview and is subject to change.
 * If you have any feedback, contact [Datadog support](https://docs.datadoghq.com/help/).
 */
export class MonitorNotificationRuleBundleConfig {
  /**
   * Duration of the bundling period.
   */
  "duration": number;
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
    duration: {
      baseName: "duration",
      type: "number",
      required: true,
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
    return MonitorNotificationRuleBundleConfig.attributeTypeMap;
  }

  public constructor() {}
}
