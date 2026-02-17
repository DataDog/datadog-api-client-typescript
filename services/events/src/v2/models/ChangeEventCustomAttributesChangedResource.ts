import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributesChangedResourceType } from "./ChangeEventCustomAttributesChangedResourceType";

/**
 * A uniquely identified resource.
 */
export class ChangeEventCustomAttributesChangedResource {
  /**
   * The name of the resource that was changed. Limited to 128 characters. Must contain at least one non-whitespace character.
   */
  "name": string;
  /**
   * The type of the resource that was changed.
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
