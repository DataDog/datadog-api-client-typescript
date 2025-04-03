import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the created user.
 */
export class ServiceAccountCreateAttributes {
  /**
   * The email of the user.
   */
  "email": string;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * Whether the user is a service account. Must be true.
   */
  "serviceAccount": boolean;
  /**
   * The title of the user.
   */
  "title"?: string;
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
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    serviceAccount: {
      baseName: "service_account",
      type: "boolean",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
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
    return ServiceAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
