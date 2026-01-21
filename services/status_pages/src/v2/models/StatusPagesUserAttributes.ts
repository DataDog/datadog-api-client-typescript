import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the Datadog user.
 */
export class StatusPagesUserAttributes {
  /**
   * The email of the Datadog user.
   */
  "email"?: string;
  /**
   * The handle of the Datadog user.
   */
  "handle"?: string;
  /**
   * The icon of the Datadog user.
   */
  "icon"?: string;
  /**
   * The name of the Datadog user.
   */
  "name"?: string;
  /**
   * The UUID of the Datadog user.
   */
  "uuid"?: string;
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
    handle: {
      baseName: "handle",
      type: "string",
    },
    icon: {
      baseName: "icon",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    uuid: {
      baseName: "uuid",
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
    return StatusPagesUserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
