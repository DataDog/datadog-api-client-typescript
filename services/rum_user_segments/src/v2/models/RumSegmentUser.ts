import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A user who performed an action on a segment.
 */
export class RumSegmentUser {
  /**
   * The email handle of the user.
   */
  "handle": string;
  /**
   * The URL of the user icon.
   */
  "icon": string;
  /**
   * The numeric identifier of the user.
   */
  "id": string;
  /**
   * The display name of the user.
   */
  "name": string;
  /**
   * The unique identifier of the user.
   */
  "uuid": string;
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
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    icon: {
      baseName: "icon",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    uuid: {
      baseName: "uuid",
      type: "string",
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
    return RumSegmentUser.attributeTypeMap;
  }

  public constructor() {}
}
