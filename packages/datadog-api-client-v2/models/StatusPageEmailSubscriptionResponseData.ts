/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPageEmailSubscriptionResponseAttributes } from "./StatusPageEmailSubscriptionResponseAttributes";
import { StatusPageEmailSubscriptionResponseRelationships } from "./StatusPageEmailSubscriptionResponseRelationships";
import { StatusPageEmailSubscriptionType } from "./StatusPageEmailSubscriptionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Email subscription data from a response.
 */
export class StatusPageEmailSubscriptionResponseData {
  /**
   * The email subscription attributes from a response.
   */
  "attributes": StatusPageEmailSubscriptionResponseAttributes;
  /**
   * The email subscription ID.
   */
  "id": string;
  /**
   * The email subscription relationships from a response.
   */
  "relationships": StatusPageEmailSubscriptionResponseRelationships;
  /**
   * Status page email subscription resource type.
   */
  "type": StatusPageEmailSubscriptionType;

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
      type: "StatusPageEmailSubscriptionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "StatusPageEmailSubscriptionResponseRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatusPageEmailSubscriptionType",
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
    return StatusPageEmailSubscriptionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
