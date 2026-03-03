import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageRelationshipSubscribedComponents } from "./StatusPageRelationshipSubscribedComponents";

/**
 * The email subscription relationships for a request.
 */
export class StatusPageEmailSubscriptionRequestRelationships {
  /**
   * Relationship to subscribed components.
   */
  "subscribedComponents"?: StatusPageRelationshipSubscribedComponents;
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
    subscribedComponents: {
      baseName: "subscribed_components",
      type: "StatusPageRelationshipSubscribedComponents",
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
    return StatusPageEmailSubscriptionRequestRelationships.attributeTypeMap;
  }

  public constructor() {}
}
