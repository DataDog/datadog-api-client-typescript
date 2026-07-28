import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the RUM configuration to create.
 */
export class RumConfigCreateAttributes {
  /**
   * Whether application tags are enforced for the RUM applications in the organization.
   */
  "enforcedApplicationTags": boolean;
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
    enforcedApplicationTags: {
      baseName: "enforced_application_tags",
      type: "boolean",
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
    return RumConfigCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
