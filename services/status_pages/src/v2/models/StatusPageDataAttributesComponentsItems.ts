import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateComponentRequestDataAttributesType } from "./CreateComponentRequestDataAttributesType";
import { StatusPageDataAttributesComponentsItemsComponentsItems } from "./StatusPageDataAttributesComponentsItemsComponentsItems";
import { StatusPagesComponentGroupAttributesComponentsItemsStatus } from "./StatusPagesComponentGroupAttributesComponentsItemsStatus";

export class StatusPageDataAttributesComponentsItems {
  /**
   * If the component is of type `group`, the components within the group.
   */
  "components"?: Array<StatusPageDataAttributesComponentsItemsComponentsItems>;
  /**
   * The ID of the component.
   */
  "id"?: string;
  /**
   * The name of the component.
   */
  "name"?: string;
  /**
   * The zero-indexed position of the component.
   */
  "position"?: number;
  /**
   * The status of the component.
   */
  "status"?: StatusPagesComponentGroupAttributesComponentsItemsStatus;
  /**
   * The type of the component.
   */
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
      type: "Array<StatusPageDataAttributesComponentsItemsComponentsItems>",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
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
    return StatusPageDataAttributesComponentsItems.attributeTypeMap;
  }

  public constructor() {}
}
