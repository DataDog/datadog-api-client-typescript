import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A Datadog user referenced by a RUM operation.
 */
export class RUMOperationUser {
  /**
   * The email of the user.
   */
  "email"?: string;
  /**
   * The handle of the user.
   */
  "handle"?: string;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * The UUID of the user.
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
    return RUMOperationUser.attributeTypeMap;
  }

  public constructor() {}
}
