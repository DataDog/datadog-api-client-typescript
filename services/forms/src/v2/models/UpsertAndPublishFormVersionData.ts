import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionType } from "./FormVersionType";
import { UpsertAndPublishFormVersionDataAttributes } from "./UpsertAndPublishFormVersionDataAttributes";

/**
 * The data for upserting and publishing a form version.
 */
export class UpsertAndPublishFormVersionData {
  /**
   * The attributes for upserting and publishing a form version.
   */
  "attributes": UpsertAndPublishFormVersionDataAttributes;
  /**
   * The resource type for a form version.
   */
  "type": FormVersionType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "UpsertAndPublishFormVersionDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormVersionType",
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
    return UpsertAndPublishFormVersionData.attributeTypeMap;
  }

  public constructor() {}
}
