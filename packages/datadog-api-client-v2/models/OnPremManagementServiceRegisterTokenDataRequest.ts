/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnPremManagementServiceRegisterTokenAttributes } from "./OnPremManagementServiceRegisterTokenAttributes";
import { OnPremManagementServiceRegisterTokenType } from "./OnPremManagementServiceRegisterTokenType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for registering a token.
 */
export class OnPremManagementServiceRegisterTokenDataRequest {
  /**
   * Attributes for registering a token.
   */
  "attributes": OnPremManagementServiceRegisterTokenAttributes;
  /**
   * The type of the resource. The value should always be registerTokenRequest.
   */
  "type": OnPremManagementServiceRegisterTokenType;

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
      type: "OnPremManagementServiceRegisterTokenAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnPremManagementServiceRegisterTokenType",
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
    return OnPremManagementServiceRegisterTokenDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
