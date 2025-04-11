import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Resources Collection config.
 */
export class AWSResourcesConfig {
  /**
   * Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations. Defaults to `false`. Requires `extended_collection` to be set to `true`.
   */
  "cloudSecurityPostureManagementCollection"?: boolean;
  /**
   * Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Defaults to `true`. Required for `cloud_security_posture_management_collection`.
   */
  "extendedCollection"?: boolean;
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
    cloudSecurityPostureManagementCollection: {
      baseName: "cloud_security_posture_management_collection",
      type: "boolean",
    },
    extendedCollection: {
      baseName: "extended_collection",
      type: "boolean",
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
    return AWSResourcesConfig.attributeTypeMap;
  }

  public constructor() {}
}
