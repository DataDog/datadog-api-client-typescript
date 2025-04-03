import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationSettings } from "./OrganizationSettings";
import { OrganizationSubscription } from "./OrganizationSubscription";

/**
 * Create, edit, and manage organizations.
 */
export class Organization {
  /**
   * A JSON array of billing type.
   */
  "billing"?: OrganizationBilling;
  /**
   * Date of the organization creation.
   */
  "created"?: string;
  /**
   * Description of the organization.
   */
  "description"?: string;
  /**
   * The name of the child organization, limited to 32 characters.
   */
  "name"?: string;
  /**
   * The `public_id` of the organization you are operating within.
   */
  "publicId"?: string;
  /**
   * A JSON array of settings.
   */
  "settings"?: OrganizationSettings;
  /**
   * Subscription definition.
   */
  "subscription"?: OrganizationSubscription;
  /**
   * Only available for MSP customers. Allows child organizations to be created on a trial plan.
   */
  "trial"?: boolean;
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
    created: {
      baseName: "created",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "OrganizationSettings",
    },
    subscription: {
      baseName: "subscription",
      type: "OrganizationSubscription",
    },
    trial: {
      baseName: "trial",
      type: "boolean",
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
    return Organization.attributeTypeMap;
  }

  public constructor() {}
}
