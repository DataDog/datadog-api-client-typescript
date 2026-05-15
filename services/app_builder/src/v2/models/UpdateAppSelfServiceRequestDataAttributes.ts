import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating an app's self-service status.
 */
export class UpdateAppSelfServiceRequestDataAttributes {
  /**
   * Whether the app is enabled for self-service.
   */
  "selfService": boolean;
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
    selfService: {
      baseName: "selfService",
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
    return UpdateAppSelfServiceRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
