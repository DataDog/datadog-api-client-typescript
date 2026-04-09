/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecureEmbedUpdateRequestAttributes } from "./SecureEmbedUpdateRequestAttributes";
import { SecureEmbedUpdateRequestType } from "./SecureEmbedUpdateRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a secure embed.
 */
export class SecureEmbedUpdateRequestData {
  /**
   * Attributes for updating a secure embed shared dashboard. All fields are optional.
   */
  "attributes": SecureEmbedUpdateRequestAttributes;
  /**
   * Resource type for secure embed update requests.
   */
  "type": SecureEmbedUpdateRequestType;

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
      type: "SecureEmbedUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedUpdateRequestType",
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
    return SecureEmbedUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
