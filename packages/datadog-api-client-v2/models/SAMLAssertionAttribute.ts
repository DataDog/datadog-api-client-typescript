/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SAMLAssertionAttributeAttributes } from "./SAMLAssertionAttributeAttributes";
import { SAMLAssertionAttributesType } from "./SAMLAssertionAttributesType";

import { AttributeTypeMap } from "../util";

/**
 * SAML assertion attribute.
 */
export class SAMLAssertionAttribute {
  /**
   * Key/Value pair of attributes used in SAML assertion attributes.
   */
  "attributes"?: SAMLAssertionAttributeAttributes;
  /**
   * The ID of the SAML assertion attribute.
   */
  "id": number;
  /**
   * SAML assertion attributes resource type.
   */
  "type": SAMLAssertionAttributesType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SAMLAssertionAttributeAttributes",
    },
    id: {
      baseName: "id",
      type: "number",
      required: true,
      format: "int32",
    },
    type: {
      baseName: "type",
      type: "SAMLAssertionAttributesType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SAMLAssertionAttribute.attributeTypeMap;
  }

  public constructor() {}
}
