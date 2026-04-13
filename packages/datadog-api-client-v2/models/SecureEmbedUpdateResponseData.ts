/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecureEmbedUpdateResponseAttributes } from "./SecureEmbedUpdateResponseAttributes";
import { SecureEmbedUpdateResponseType } from "./SecureEmbedUpdateResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a secure embed update response.
 */
export class SecureEmbedUpdateResponseData {
  /**
   * Attributes of an updated secure embed shared dashboard.
   */
  "attributes": SecureEmbedUpdateResponseAttributes;
  /**
   * Internal share ID.
   */
  "id": string;
  /**
   * Resource type for secure embed update responses.
   */
  "type": SecureEmbedUpdateResponseType;

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
      type: "SecureEmbedUpdateResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedUpdateResponseType",
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
    return SecureEmbedUpdateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
