/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OktaAccountType } from "./OktaAccountType";
import { OktaAccountUpdateRequestAttributes } from "./OktaAccountUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating an Okta account.
 */
export class OktaAccountUpdateRequestData {
  /**
   * Attributes object for updating an Okta account.
   */
  "attributes"?: OktaAccountUpdateRequestAttributes;
  /**
   * Account type for an Okta account.
   */
  "type"?: OktaAccountType;

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
      type: "OktaAccountUpdateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "OktaAccountType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OktaAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
