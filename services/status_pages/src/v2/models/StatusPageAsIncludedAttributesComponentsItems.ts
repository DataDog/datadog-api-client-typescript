import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateComponentRequestDataAttributesType } from "./CreateComponentRequestDataAttributesType";
import { StatusPageAsIncludedAttributesComponentsItemsComponentsItems } from "./StatusPageAsIncludedAttributesComponentsItemsComponentsItems";
import { StatusPagesComponentGroupAttributesComponentsItemsStatus } from "./StatusPagesComponentGroupAttributesComponentsItemsStatus";

export class StatusPageAsIncludedAttributesComponentsItems {
  "components"?: Array<StatusPageAsIncludedAttributesComponentsItemsComponentsItems>;
  "id"?: string;
  "name"?: string;
  "position"?: number;
  "status"?: StatusPagesComponentGroupAttributesComponentsItemsStatus;
  "type"?: CreateComponentRequestDataAttributesType;
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
    components: {
      baseName: "components",
      type: "Array<StatusPageAsIncludedAttributesComponentsItemsComponentsItems>",
    },
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
      type: "CreateComponentRequestDataAttributesType",
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
    return StatusPageAsIncludedAttributesComponentsItems.attributeTypeMap;
  }

  public constructor() {}
}
