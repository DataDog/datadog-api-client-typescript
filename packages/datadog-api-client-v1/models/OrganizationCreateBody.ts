/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationSubscription } from "./OrganizationSubscription";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationCreateBody.attributeTypeMap;
  }

  public constructor() {}
}
