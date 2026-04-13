/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecureEmbedGetResponseAttributes } from "./SecureEmbedGetResponseAttributes";
import { SecureEmbedGetResponseType } from "./SecureEmbedGetResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a secure embed get response.
 */
export class SecureEmbedGetResponseData {
  /**
   * Attributes of an existing secure embed shared dashboard.
   */
  "attributes": SecureEmbedGetResponseAttributes;
  /**
   * Internal share ID.
   */
  "id": string;
  /**
   * Resource type for secure embed get responses.
   */
  "type": SecureEmbedGetResponseType;

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
      type: "SecureEmbedGetResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedGetResponseType",
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
    return SecureEmbedGetResponseData.attributeTypeMap;
  }

  public constructor() {}
}
