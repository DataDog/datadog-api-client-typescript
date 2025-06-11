import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributesImpactedResourcesItemsType } from "./ChangeEventCustomAttributesImpactedResourcesItemsType";

/**
 * Object representing a uniquely identified resource.
 */
export class ChangeEventCustomAttributesImpactedResourcesItems {
  /**
   * Resource's name. Limited to 128 characters.
   */
  "name": string;
  /**
   * Resource's type.
   */
  "type": ChangeEventCustomAttributesImpactedResourcesItemsType;
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
      type: "ChangeEventCustomAttributesImpactedResourcesItemsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeEventCustomAttributesImpactedResourcesItems.attributeTypeMap;
  }

  public constructor() {}
}
