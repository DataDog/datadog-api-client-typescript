/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnPremManagementServiceRegisterTokenResponseAttributes } from "./OnPremManagementServiceRegisterTokenResponseAttributes";
import { OnPremManagementServiceRegisterTokenResponseType } from "./OnPremManagementServiceRegisterTokenResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for the registered token.
 */
export class OnPremManagementServiceRegisterTokenResponseData {
  /**
   * Attributes for the registered token.
   */
  "attributes": OnPremManagementServiceRegisterTokenResponseAttributes;
  /**
   * The token identifier.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be tokenDefinitions.
   */
  "type": OnPremManagementServiceRegisterTokenResponseType;

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
      type: "OnPremManagementServiceRegisterTokenResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "OnPremManagementServiceRegisterTokenResponseType",
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
    return OnPremManagementServiceRegisterTokenResponseData.attributeTypeMap;
  }

  public constructor() {}
}
