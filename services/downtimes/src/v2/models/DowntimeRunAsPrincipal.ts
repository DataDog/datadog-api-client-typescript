import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeRunAsPrincipalType } from "./DowntimeRunAsPrincipalType";

/**
 * A principal (user, role, or team) allowed to act on behalf of the downtime.
 */
export class DowntimeRunAsPrincipal {
  /**
   * The ID of the principal.
   */
  "id": string;
  /**
   * The type of principal allowed to act on behalf of the downtime.
   */
  "type": DowntimeRunAsPrincipalType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DowntimeRunAsPrincipalType",
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
    return DowntimeRunAsPrincipal.attributeTypeMap;
  }

  public constructor() {}
}
