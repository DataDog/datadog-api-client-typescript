import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageDataType } from "./StatusPageDataType";

export class StatusPagesComponentDataRelationshipsStatusPageData {
  /**
   * The ID of the status page the component belongs to.
   */
  "id": string;
  /**
   * Status pages resource type.
   */
  "type": StatusPageDataType;
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
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "StatusPageDataType",
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
    return StatusPagesComponentDataRelationshipsStatusPageData.attributeTypeMap;
  }

  public constructor() {}
}
