import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueCaseResourceType } from "./IssueCaseResourceType";

/**
 * The case the issue is attached to.
 */
export class IssueCaseReference {
  /**
   * Case identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueCaseResourceType;
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
      type: "IssueCaseResourceType",
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
    return IssueCaseReference.attributeTypeMap;
  }

  public constructor() {}
}
