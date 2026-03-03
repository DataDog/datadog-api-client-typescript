import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageRelationshipStatusPage } from "./StatusPageRelationshipStatusPage";
import { StatusPageRelationshipSubscribedComponents } from "./StatusPageRelationshipSubscribedComponents";

/**
 * The email subscription relationships from a response.
 */
export class StatusPageEmailSubscriptionResponseRelationships {
  /**
   * Relationship to the status page.
   */
  "statusPage": StatusPageRelationshipStatusPage;
  /**
   * Relationship to subscribed components.
   */
  "subscribedComponents": StatusPageRelationshipSubscribedComponents;
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
    statusPage: {
      baseName: "status_page",
      type: "StatusPageRelationshipStatusPage",
      required: true,
    },
    subscribedComponents: {
      baseName: "subscribed_components",
      type: "StatusPageRelationshipSubscribedComponents",
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
    return StatusPageEmailSubscriptionResponseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
