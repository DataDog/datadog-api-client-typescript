import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesUserAttributes } from "./StatusPagesUserAttributes";
import { StatusPagesUserType } from "./StatusPagesUserType";

export class StatusPagesUser {
  "attributes"?: StatusPagesUserAttributes;
  "id"?: string;
  /**
   * Users resource type.
   */
  "type": StatusPagesUserType;
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
      type: "StatusPagesUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "StatusPagesUserType",
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
    return StatusPagesUser.attributeTypeMap;
  }

  public constructor() {}
}
