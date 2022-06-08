/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationSettings } from "./OrganizationSettings";
import { OrganizationSubscription } from "./OrganizationSubscription";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * The name of the new child-organization, limited to 32 characters.
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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Organization.attributeTypeMap;
  }

  public constructor() {}
}
