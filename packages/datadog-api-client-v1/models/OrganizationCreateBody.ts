/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationSubscription } from "./OrganizationSubscription";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object describing an organization to create.
 */

export class OrganizationCreateBody {
  "billing"?: OrganizationBilling;
  /**
   * The name of the new child-organization, limited to 32 characters.
   */
  "name": string;
  "subscription"?: OrganizationSubscription;

  "unparsedObject"?: any;

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
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationCreateBody.attributeTypeMap;
  }

  public constructor() {}
}
