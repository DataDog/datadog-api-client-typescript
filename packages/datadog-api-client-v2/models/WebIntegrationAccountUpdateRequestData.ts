/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebIntegrationAccountType } from "./WebIntegrationAccountType";
import { WebIntegrationAccountUpdateRequestAttributes } from "./WebIntegrationAccountUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a web integration account.
 */
export class WebIntegrationAccountUpdateRequestData {
  /**
   * Attributes for updating a web integration account. All fields are optional -
   * only provide the fields you want to update. Partial updates are supported,
   * allowing you to modify specific settings or secrets without providing all fields.
   */
  "attributes"?: WebIntegrationAccountUpdateRequestAttributes;
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
      type: "WebIntegrationAccountUpdateRequestAttributes",
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
    return WebIntegrationAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
