/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SampleLogGenerationSubscriptionAttributes } from "./SampleLogGenerationSubscriptionAttributes";
import { SampleLogGenerationSubscriptionResourceType } from "./SampleLogGenerationSubscriptionResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A sample log generation subscription.
 */
export class SampleLogGenerationSubscriptionData {
  /**
   * The attributes describing a sample log generation subscription.
   */
  "attributes": SampleLogGenerationSubscriptionAttributes;
  /**
   * The unique identifier of the subscription.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `subscriptions`.
   */
  "type": SampleLogGenerationSubscriptionResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "SampleLogGenerationSubscriptionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SampleLogGenerationSubscriptionResourceType",
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
    return SampleLogGenerationSubscriptionData.attributeTypeMap;
  }

  public constructor() {}
}
