import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class StatusPagesUserAttributes {
  "email"?: string;
  "handle"?: string;
  "icon"?: string;
  "name"?: string;
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
