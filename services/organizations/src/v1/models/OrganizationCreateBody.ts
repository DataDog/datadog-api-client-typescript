import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationSubscription } from "./OrganizationSubscription";

/**
 * Object describing an organization to create.
 */
export class OrganizationCreateBody {
  /**
   * A JSON array of billing type.
   */
  "billing"?: OrganizationBilling;
  /**
   * The name of the new child-organization, limited to 32 characters.
   */
  "name": string;
  /**
   * Subscription definition.
   */
  "subscription"?: OrganizationSubscription;
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
    billing: {
      baseName: "billing",
      type: "OrganizationBilling",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    subscription: {
      baseName: "subscription",
      type: "OrganizationSubscription",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationCreateBody.attributeTypeMap;
  }

  public constructor() {}
}
