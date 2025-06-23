import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributesChangedResourceType } from "./ChangeEventCustomAttributesChangedResourceType";

/**
 * Object representing a uniquely identified resource.
 */
export class ChangeEventCustomAttributesChangedResource {
  /**
   * Resource's name.
   */
  "name": string;
  /**
   * Resource's type.
   */
  "type": ChangeEventCustomAttributesChangedResourceType;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeEventCustomAttributesChangedResourceType",
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
    return ChangeEventCustomAttributesChangedResource.attributeTypeMap;
  }

  public constructor() {}
}
