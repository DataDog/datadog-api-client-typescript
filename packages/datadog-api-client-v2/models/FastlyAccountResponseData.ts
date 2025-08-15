/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyAccounResponseAttributes } from "./FastlyAccounResponseAttributes";
import { FastlyAccountType } from "./FastlyAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object of a Fastly account.
 */
export class FastlyAccountResponseData {
  /**
   * Attributes object of a Fastly account.
   */
  "attributes": FastlyAccounResponseAttributes;
  /**
   * The ID of the Fastly account, a hash of the account name.
   */
  "id": string;
  /**
   * The JSON:API type for this API. Should always be `fastly-accounts`.
   */
  "type": FastlyAccountType;

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
      type: "FastlyAccounResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FastlyAccountType",
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
    return FastlyAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
