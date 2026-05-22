/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SampleLogGenerationDuration } from "./SampleLogGenerationDuration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes for creating sample log generation subscriptions for multiple content packs.
 */
export class SampleLogGenerationBulkSubscriptionAttributes {
  /**
   * The identifiers of the Cloud SIEM content packs to subscribe to. At most five content packs can be requested in a single call.
   */
  "contentPackIds": Array<string>;
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
    contentPackIds: {
      baseName: "content_pack_ids",
      type: "Array<string>",
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
    return SampleLogGenerationBulkSubscriptionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
