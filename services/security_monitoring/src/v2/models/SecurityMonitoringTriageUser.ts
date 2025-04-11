import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object representing a given user entity.
 */
export class SecurityMonitoringTriageUser {
  /**
   * The handle for this user account.
   */
  "handle"?: string;
  /**
   * Gravatar icon associated to the user.
   */
  "icon"?: string;
  /**
   * Numerical ID assigned by Datadog to this user account.
   */
  "id"?: number;
  /**
   * The name for this user account.
   */
  "name"?: string;
  /**
   * UUID assigned by Datadog to this user account.
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
    },
    icon: {
      baseName: "icon",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return SecurityMonitoringTriageUser.attributeTypeMap;
  }

  public constructor() {}
}
