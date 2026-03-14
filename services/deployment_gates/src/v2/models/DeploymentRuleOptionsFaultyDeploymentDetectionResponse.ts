import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Faulty deployment detection options returned in deployment rule responses. The `excluded_resources` field is always present, which allows disambiguating this type from monitor options when both share a `duration` field.
 */
export class DeploymentRuleOptionsFaultyDeploymentDetectionResponse {
  /**
   * The duration for faulty deployment detection.
   */
  "duration"?: number;
  /**
   * Resources to exclude from faulty deployment detection.
   */
  "excludedResources": Array<string>;
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
      format: "int64",
    },
    excludedResources: {
      baseName: "excluded_resources",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentRuleOptionsFaultyDeploymentDetectionResponse.attributeTypeMap;
  }

  public constructor() {}
}
