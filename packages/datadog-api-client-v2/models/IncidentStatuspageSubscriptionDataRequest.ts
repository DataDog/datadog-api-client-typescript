/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentStatuspageSubscriptionDataAttributesRequest } from "./IncidentStatuspageSubscriptionDataAttributesRequest";
import { IncidentStatuspageSubscriptionType } from "./IncidentStatuspageSubscriptionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Subscription data for a request.
 */
export class IncidentStatuspageSubscriptionDataRequest {
  /**
   * Attributes for creating an email subscription.
   */
  "attributes": IncidentStatuspageSubscriptionDataAttributesRequest;
  /**
   * Statuspage email subscription resource type.
   */
  "type": IncidentStatuspageSubscriptionType;

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
      type: "IncidentStatuspageSubscriptionDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentStatuspageSubscriptionType",
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
    return IncidentStatuspageSubscriptionDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
