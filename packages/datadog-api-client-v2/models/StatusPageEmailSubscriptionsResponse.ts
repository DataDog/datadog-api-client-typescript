/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPageEmailSubscriptionResponseData } from "./StatusPageEmailSubscriptionResponseData";
import { StatusPageEmailSubscriptionsResponseMeta } from "./StatusPageEmailSubscriptionsResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of email subscriptions.
 */
export class StatusPageEmailSubscriptionsResponse {
  /**
   * List of email subscriptions.
   */
  "data": Array<StatusPageEmailSubscriptionResponseData>;
  /**
   * Metadata for the list of email subscriptions.
   */
  "meta": StatusPageEmailSubscriptionsResponseMeta;

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
      type: "Array<StatusPageEmailSubscriptionResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "StatusPageEmailSubscriptionsResponseMeta",
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
    return StatusPageEmailSubscriptionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
