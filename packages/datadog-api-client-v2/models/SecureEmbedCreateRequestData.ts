/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecureEmbedCreateRequestAttributes } from "./SecureEmbedCreateRequestAttributes";
import { SecureEmbedRequestType } from "./SecureEmbedRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating a secure embed.
 */
export class SecureEmbedCreateRequestData {
  /**
   * Attributes for creating a secure embed shared dashboard.
   */
  "attributes": SecureEmbedCreateRequestAttributes;
  /**
   * Resource type for secure embed create requests.
   */
  "type": SecureEmbedRequestType;

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
      type: "SecureEmbedCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedRequestType",
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
    return SecureEmbedCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
