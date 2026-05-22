/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SampleLogGenerationSubscriptionCreateAttributes } from "./SampleLogGenerationSubscriptionCreateAttributes";
import { SampleLogGenerationSubscriptionRequestType } from "./SampleLogGenerationSubscriptionRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The subscription request body.
 */
export class SampleLogGenerationSubscriptionCreateData {
  /**
   * The attributes for creating a sample log generation subscription.
   */
  "attributes": SampleLogGenerationSubscriptionCreateAttributes;
  /**
   * The type of the resource. The value should always be `subscription_requests`.
   */
  "type": SampleLogGenerationSubscriptionRequestType;

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
      type: "SampleLogGenerationSubscriptionCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SampleLogGenerationSubscriptionRequestType",
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
    return SampleLogGenerationSubscriptionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
