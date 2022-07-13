/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SAMLAssertionAttributesType } from "./SAMLAssertionAttributesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of AuthN Mapping relationship to SAML Assertion Attribute.
 */
export class RelationshipToSAMLAssertionAttributeData {
  /**
   * The ID of the SAML assertion attribute.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return RelationshipToSAMLAssertionAttributeData.attributeTypeMap;
  }

  public constructor() {}
}
