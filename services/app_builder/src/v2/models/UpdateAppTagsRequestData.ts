import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppTagsType } from "./AppTagsType";
import { UpdateAppTagsRequestDataAttributes } from "./UpdateAppTagsRequestDataAttributes";

/**
 * Data for replacing an app's tags.
 */
export class UpdateAppTagsRequestData {
  /**
   * Attributes for replacing an app's tags.
   */
  "attributes"?: UpdateAppTagsRequestDataAttributes;
  /**
   * The tags resource type.
   */
  "type"?: AppTagsType;
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
    attributes: {
      baseName: "attributes",
      type: "UpdateAppTagsRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "AppTagsType",
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
    return UpdateAppTagsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
