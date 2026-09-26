import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormVersionListType } from "./FormVersionListType";
import { ListFormVersionsDataAttributes } from "./ListFormVersionsDataAttributes";

/**
 * A list-of-form-versions resource object.
 */
export class ListFormVersionsData {
  /**
   * The attributes for a list of form versions.
   */
  "attributes": ListFormVersionsDataAttributes;
  /**
   * The ID of the form.
   */
  "id": string;
  /**
   * The resource type for a list of form versions.
   */
  "type": FormVersionListType;
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
      type: "ListFormVersionsDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormVersionListType",
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
    return ListFormVersionsData.attributeTypeMap;
  }

  public constructor() {}
}
