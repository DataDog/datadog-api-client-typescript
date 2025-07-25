/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeyCreateAttributes } from "./APIKeyCreateAttributes";
import { APIKeysType } from "./APIKeysType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object used to create an API key.
 */
export class APIKeyCreateData {
  /**
   * Attributes used to create an API Key.
   */
  "attributes": APIKeyCreateAttributes;
  /**
   * API Keys resource type.
   */
  "type": APIKeysType;

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
      type: "APIKeyCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "APIKeysType",
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
    return APIKeyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
