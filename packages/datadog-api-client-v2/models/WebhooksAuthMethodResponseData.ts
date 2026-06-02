/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebhooksAuthMethodAttributes } from "./WebhooksAuthMethodAttributes";
import { WebhooksAuthMethodRelationships } from "./WebhooksAuthMethodRelationships";
import { WebhooksAuthMethodType } from "./WebhooksAuthMethodType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Webhooks auth method data from a response.
 */
export class WebhooksAuthMethodResponseData {
  /**
   * Attributes of a webhooks auth method.
   */
  "attributes": WebhooksAuthMethodAttributes;
  /**
   * The ID of the auth method.
   */
  "id": string;
  /**
   * Relationships of a webhooks auth method to its protocol-specific resource.
   */
  "relationships"?: WebhooksAuthMethodRelationships;
  /**
   * Webhooks auth method resource type.
   */
  "type": WebhooksAuthMethodType;

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
      type: "WebhooksAuthMethodAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "WebhooksAuthMethodRelationships",
    },
    type: {
      baseName: "type",
      type: "WebhooksAuthMethodType",
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
    return WebhooksAuthMethodResponseData.attributeTypeMap;
  }

  public constructor() {}
}
