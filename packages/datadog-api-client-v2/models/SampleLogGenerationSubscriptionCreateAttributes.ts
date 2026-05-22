/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SampleLogGenerationDuration } from "./SampleLogGenerationDuration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes for creating a sample log generation subscription.
 */
export class SampleLogGenerationSubscriptionCreateAttributes {
  /**
   * The identifier of the Cloud SIEM content pack to subscribe to.
   */
  "contentPackId": string;
  /**
   * How long the subscription should remain active before expiring.
   */
  "duration"?: SampleLogGenerationDuration;

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
    duration: {
      baseName: "duration",
      type: "SampleLogGenerationDuration",
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
    return SampleLogGenerationSubscriptionCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
