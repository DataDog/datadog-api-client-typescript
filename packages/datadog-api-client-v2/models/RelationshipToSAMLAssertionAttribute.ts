/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToSAMLAssertionAttributeData } from "./RelationshipToSAMLAssertionAttributeData";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * AuthN Mapping relationship to SAML Assertion Attribute.
 */

export class RelationshipToSAMLAssertionAttribute {
  "data": RelationshipToSAMLAssertionAttributeData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RelationshipToSAMLAssertionAttributeData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToSAMLAssertionAttribute.attributeTypeMap;
  }

  public constructor() {}
}
