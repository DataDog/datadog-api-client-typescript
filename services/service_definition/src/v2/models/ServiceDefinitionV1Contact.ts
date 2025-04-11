import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Contact information about the service.
 */
export class ServiceDefinitionV1Contact {
  /**
   * Service owner’s email.
   */
  "email"?: string;
  /**
   * Service owner’s Slack channel.
   */
  "slack"?: string;
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
    email: {
      baseName: "email",
      type: "string",
    },
    slack: {
      baseName: "slack",
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
    return ServiceDefinitionV1Contact.attributeTypeMap;
  }

  public constructor() {}
}
