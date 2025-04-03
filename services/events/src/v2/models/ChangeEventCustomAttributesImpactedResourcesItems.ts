import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributesImpactedResourcesItemsType } from "./ChangeEventCustomAttributesImpactedResourcesItemsType";

/**
 * Object representing a uniquely identified resource. Only the resource type `service` is supported.
 */
export class ChangeEventCustomAttributesImpactedResourcesItems {
  /**
   * Resource's name.
   */
  "name": string;
  /**
   * Resource's type.
   */
  "type": ChangeEventCustomAttributesImpactedResourcesItemsType;
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
      type: "ChangeEventCustomAttributesImpactedResourcesItemsType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
