import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserAttributes } from "./IncidentUserAttributes";
import { UsersType } from "./UsersType";

/**
 * User object returned by the API.
 */
export class IncidentUserData {
  /**
   * Attributes of user object returned by the API.
   */
  "attributes"?: IncidentUserAttributes;
  /**
   * ID of the user.
   */
  "id"?: string;
  /**
   * Users resource type.
   */
  "type"?: UsersType;
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
      type: "IncidentUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsersType",
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
    return IncidentUserData.attributeTypeMap;
  }

  public constructor() {}
}
