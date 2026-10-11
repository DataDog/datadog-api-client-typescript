/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AmsIntegrationAccountCreateRequestAttributes } from "./AmsIntegrationAccountCreateRequestAttributes";
import { AmsIntegrationAccountType } from "./AmsIntegrationAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating a web integration account.
 */
export class AmsIntegrationAccountCreateRequestData {
  /**
   * Attributes for creating a web integration account.
   */
  "attributes": AmsIntegrationAccountCreateRequestAttributes;
  /**
   * The JSON:API type for web integration accounts.
   */
  "type": AmsIntegrationAccountType;

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
      type: "AmsIntegrationAccountCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AmsIntegrationAccountType",
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
    return AmsIntegrationAccountCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
