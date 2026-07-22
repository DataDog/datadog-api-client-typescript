import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SharedDashboardIncludedUserAttributes } from "./SharedDashboardIncludedUserAttributes";
import { UserResourceType } from "./UserResourceType";

/**
 * Included user resource.
 */
export class SharedDashboardIncludedUser {
  /**
   * Attributes of the included user.
   */
  "attributes": SharedDashboardIncludedUserAttributes;
  /**
   * ID of the user.
   */
  "id": string;
  /**
   * User resource type.
   */
  "type": UserResourceType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "SharedDashboardIncludedUserAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserResourceType",
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
    return SharedDashboardIncludedUser.attributeTypeMap;
  }

  public constructor() {}
}
