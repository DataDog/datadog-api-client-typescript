import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetIncludedUserAttributes } from "./WidgetIncludedUserAttributes";

/**
 * A user resource included in the response.
 */
export class WidgetIncludedUser {
  /**
   * Attributes of an included user resource.
   */
  "attributes"?: WidgetIncludedUserAttributes;
  /**
   * The unique identifier of the user.
   */
  "id": string;
  /**
   * Users resource type.
   */
  "type": string;
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
    attributes: {
      baseName: "attributes",
      type: "WidgetIncludedUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
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
    return WidgetIncludedUser.attributeTypeMap;
  }

  public constructor() {}
}
