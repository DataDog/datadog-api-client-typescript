/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SampleLogGenerationSubscriptionData } from "./SampleLogGenerationSubscriptionData";
import { SampleLogGenerationSubscriptionsResponseMeta } from "./SampleLogGenerationSubscriptionsResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of sample log generation subscriptions.
 */
export class SampleLogGenerationSubscriptionsResponse {
  /**
   * The list of sample log generation subscriptions.
   */
  "data": Array<SampleLogGenerationSubscriptionData>;
  /**
   * Metadata returned alongside a list of sample log generation subscriptions.
   */
  "meta": SampleLogGenerationSubscriptionsResponseMeta;

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
    data: {
      baseName: "data",
      type: "Array<SampleLogGenerationSubscriptionData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SampleLogGenerationSubscriptionsResponseMeta",
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
    return SampleLogGenerationSubscriptionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
