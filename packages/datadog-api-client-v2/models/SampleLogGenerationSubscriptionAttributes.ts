/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SampleLogGenerationSubscriptionStatus } from "./SampleLogGenerationSubscriptionStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes describing a sample log generation subscription.
 */
export class SampleLogGenerationSubscriptionAttributes {
  /**
   * The identifier of the Cloud SIEM content pack the subscription targets.
   */
  "contentPackId": string;
  /**
   * The time at which the subscription was created.
   */
  "createdAt": Date;
  /**
   * The time at which the subscription expires and stops generating logs.
   */
  "expiresAt": Date;
  /**
   * Whether the subscription is currently active and generating logs.
   */
  "isActive": boolean;
  /**
   * The status of the subscription.
   */
  "status": SampleLogGenerationSubscriptionStatus;

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
    contentPackId: {
      baseName: "content_pack_id",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    isActive: {
      baseName: "is_active",
      type: "boolean",
      required: true,
    },
    status: {
      baseName: "status",
      type: "SampleLogGenerationSubscriptionStatus",
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
    return SampleLogGenerationSubscriptionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
