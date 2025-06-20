import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventAttributesImpactedResourcesItemType } from "./ChangeEventAttributesImpactedResourcesItemType";

/**
 * A uniquely identified resource.
 */
export class ChangeEventAttributesImpactedResourcesItem {
  /**
   * The name of the impacted resource.
   */
  "name"?: string;
  /**
   * The type of the impacted resource.
   */
  "type"?: ChangeEventAttributesImpactedResourcesItemType;
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
    },
    type: {
      baseName: "type",
      type: "ChangeEventAttributesImpactedResourcesItemType",
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
    return ChangeEventAttributesImpactedResourcesItem.attributeTypeMap;
  }

  public constructor() {}
}
