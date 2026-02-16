import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageComponentType } from "./StatusPageComponentType";

/**
 * Subscribed component relationship data.
 */
export class StatusPageRelationshipSubscribedComponentData {
  /**
   * The component ID.
   */
  "id": string;
  /**
   * Status page component resource type.
   */
  "type": StatusPageComponentType;
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
      type: "StatusPageComponentType",
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
    return StatusPageRelationshipSubscribedComponentData.attributeTypeMap;
  }

  public constructor() {}
}
