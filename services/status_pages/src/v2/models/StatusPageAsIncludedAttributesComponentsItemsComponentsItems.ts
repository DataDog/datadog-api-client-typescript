import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentGroupAttributesComponentsItemsStatus } from "./StatusPagesComponentGroupAttributesComponentsItemsStatus";
import { StatusPagesComponentGroupAttributesComponentsItemsType } from "./StatusPagesComponentGroupAttributesComponentsItemsType";

export class StatusPageAsIncludedAttributesComponentsItemsComponentsItems {
  "id"?: string;
  "name"?: string;
  "position"?: number;
  "status"?: StatusPagesComponentGroupAttributesComponentsItemsStatus;
  "type"?: StatusPagesComponentGroupAttributesComponentsItemsType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    position: {
      baseName: "position",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "StatusPagesComponentGroupAttributesComponentsItemsStatus",
    },
    type: {
      baseName: "type",
      type: "StatusPagesComponentGroupAttributesComponentsItemsType",
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
    return StatusPageAsIncludedAttributesComponentsItemsComponentsItems.attributeTypeMap;
  }

  public constructor() {}
}
