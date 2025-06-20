import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventAttributesChangedResourceType } from "./ChangeEventAttributesChangedResourceType";

/**
 * A uniquely identified resource.
 */
export class ChangeEventAttributesChangedResource {
  /**
   * The name of the changed resource.
   */
  "name"?: string;
  /**
   * The type of the changed resource.
   */
  "type"?: ChangeEventAttributesChangedResourceType;
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
      type: "ChangeEventAttributesChangedResourceType",
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
    return ChangeEventAttributesChangedResource.attributeTypeMap;
  }

  public constructor() {}
}
