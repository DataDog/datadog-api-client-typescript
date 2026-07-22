import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * User information for a global organization association.
 */
export class GlobalOrgUser {
  /**
   * The handle of the user.
   */
  "handle": string;
  /**
   * The UUID of the user.
   */
  "uuid": string;
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
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    uuid: {
      baseName: "uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return GlobalOrgUser.attributeTypeMap;
  }

  public constructor() {}
}
