import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesUserType } from "./StatusPagesUserType";

/**
 * A Datadog user linked to a degradation update.
 */
export class DegradationUpdateDataRelationshipsUserData {
  /**
   * The ID of the user.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return DegradationUpdateDataRelationshipsUserData.attributeTypeMap;
  }

  public constructor() {}
}
