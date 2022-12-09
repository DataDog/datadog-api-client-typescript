/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToSAMLAssertionAttributeData } from "./RelationshipToSAMLAssertionAttributeData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AuthN Mapping relationship to SAML Assertion Attribute.
 */
export class RelationshipToSAMLAssertionAttribute {
  /**
   * Data of AuthN Mapping relationship to SAML Assertion Attribute.
   */
  "data": RelationshipToSAMLAssertionAttributeData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

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
