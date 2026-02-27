import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageRelationshipSubscribedComponentData } from "./StatusPageRelationshipSubscribedComponentData";

/**
 * Relationship to subscribed components.
 */
export class StatusPageRelationshipSubscribedComponents {
  /**
   * List of subscribed components.
   */
  "data": Array<StatusPageRelationshipSubscribedComponentData>;
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
    data: {
      baseName: "data",
      type: "Array<StatusPageRelationshipSubscribedComponentData>",
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
    return StatusPageRelationshipSubscribedComponents.attributeTypeMap;
  }

  public constructor() {}
}
