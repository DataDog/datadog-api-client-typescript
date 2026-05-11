/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebIntegrationAccountResponseAttributes } from "./WebIntegrationAccountResponseAttributes";
import { WebIntegrationAccountType } from "./WebIntegrationAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object of a web integration account.
 */
export class WebIntegrationAccountResponseData {
  /**
   * Attributes object of a web integration account. Secrets are never returned.
   */
  "attributes": WebIntegrationAccountResponseAttributes;
  /**
   * The unique identifier of the web integration account.
   */
  "id": string;
  /**
   * Account resource type.
   */
  "type": WebIntegrationAccountType;

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
      type: "WebIntegrationAccountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WebIntegrationAccountType",
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
    return WebIntegrationAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
