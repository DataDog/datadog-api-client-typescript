/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPageEmailSubscriptionStatus } from "./StatusPageEmailSubscriptionStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The email subscription attributes from a response.
 */
export class StatusPageEmailSubscriptionResponseAttributes {
  /**
   * Timestamp when the subscription was created.
   */
  "createdAt": Date;
  /**
   * The email address subscribed to the status page.
   */
  "emailAddress": string;
  /**
   * Timestamp when the subscription was last modified.
   */
  "modifiedAt": Date;
  /**
   * Status of the email subscription.
   */
  "status": StatusPageEmailSubscriptionStatus;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    emailAddress: {
      baseName: "email_address",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "StatusPageEmailSubscriptionStatus",
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
    return StatusPageEmailSubscriptionResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
