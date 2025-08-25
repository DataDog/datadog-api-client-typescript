import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * user author content.
 */
export class TimelineCellAuthorUserContent {
  /**
   * user email
   */
  "email"?: string;
  /**
   * user handle
   */
  "handle"?: string;
  /**
   * user UUID
   */
  "id"?: string;
  /**
   * user name
   */
  "name"?: string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return TimelineCellAuthorUserContent.attributeTypeMap;
  }

  public constructor() {}
}
