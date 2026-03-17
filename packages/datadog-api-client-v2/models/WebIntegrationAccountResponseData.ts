/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebIntegrationAccountAttributes } from "./WebIntegrationAccountAttributes";
import { WebIntegrationAccountType } from "./WebIntegrationAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a web integration account response.
 */
export class WebIntegrationAccountResponseData {
  /**
   * Attributes for a web integration account.
   */
  "attributes": WebIntegrationAccountAttributes;
  /**
   * The unique identifier for the account.
   */
  "id": string;
  /**
   * The JSON:API type for web integration accounts.
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
      type: "WebIntegrationAccountAttributes",
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
