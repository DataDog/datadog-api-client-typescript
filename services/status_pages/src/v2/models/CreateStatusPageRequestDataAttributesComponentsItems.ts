import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateComponentRequestDataAttributesType } from "./CreateComponentRequestDataAttributesType";
import { CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems } from "./CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems";
import { StatusPagesComponentGroupAttributesComponentsItemsStatus } from "./StatusPagesComponentGroupAttributesComponentsItemsStatus";

export class CreateStatusPageRequestDataAttributesComponentsItems {
  /**
   * If creating a component of type `group`, the components to create within the group.
   */
  "components"?: Array<CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems>;
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
      type: "Array<CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems>",
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
    return CreateStatusPageRequestDataAttributesComponentsItems.attributeTypeMap;
  }

  public constructor() {}
}
