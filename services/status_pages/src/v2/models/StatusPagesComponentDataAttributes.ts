import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateComponentRequestDataAttributesType } from "./CreateComponentRequestDataAttributesType";
import { StatusPagesComponentDataAttributesComponentsItems } from "./StatusPagesComponentDataAttributesComponentsItems";
import { StatusPagesComponentDataAttributesStatus } from "./StatusPagesComponentDataAttributesStatus";

export class StatusPagesComponentDataAttributes {
  "components"?: Array<StatusPagesComponentDataAttributesComponentsItems>;
  "createdAt"?: Date;
  "modifiedAt"?: Date;
  "name"?: string;
  "position"?: number;
  "status"?: StatusPagesComponentDataAttributesStatus;
  "type": CreateComponentRequestDataAttributesType;
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
      type: "Array<StatusPagesComponentDataAttributesComponentsItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
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
      type: "StatusPagesComponentDataAttributesStatus",
    },
    type: {
      baseName: "type",
      type: "CreateComponentRequestDataAttributesType",
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
    return StatusPagesComponentDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
