import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueSampleType } from "./IssueSampleType";

/**
 * A curated error sample of the issue.
 */
export class IssueSampleReference {
  /**
   * Sample identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueSampleType;
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
      type: "IssueSampleType",
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
    return IssueSampleReference.attributeTypeMap;
  }

  public constructor() {}
}
