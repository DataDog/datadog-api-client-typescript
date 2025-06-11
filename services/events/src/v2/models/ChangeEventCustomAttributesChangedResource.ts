import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributesChangedResourceType } from "./ChangeEventCustomAttributesChangedResourceType";

/**
 * Object representing a uniquely identified resource.
 */
export class ChangeEventCustomAttributesChangedResource {
  /**
   * Resource's name. Limited to 128 characters.
   */
  "name": string;
  /**
   * Resource's type.
   */
  "type": ChangeEventCustomAttributesChangedResourceType;
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeEventCustomAttributesChangedResource.attributeTypeMap;
  }

  public constructor() {}
}
