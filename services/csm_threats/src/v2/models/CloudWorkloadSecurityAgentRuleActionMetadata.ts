import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The metadata action applied on the scope matching the rule
 */
export class CloudWorkloadSecurityAgentRuleActionMetadata {
  /**
   * The image tag of the metadata action
   */
  "imageTag"?: string;
  /**
   * The service of the metadata action
   */
  "service"?: string;
  /**
   * The short image of the metadata action
   */
  "shortImage"?: string;
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
    imageTag: {
      baseName: "image_tag",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    shortImage: {
      baseName: "short_image",
      type: "string",
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
    return CloudWorkloadSecurityAgentRuleActionMetadata.attributeTypeMap;
  }

  public constructor() {}
}
