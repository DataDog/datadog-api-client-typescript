/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToLeakedKeyData } from "./RelationshipToLeakedKeyData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to the leak the access token was found in. `data` is null when the access token has not been detected as leaked.
 */
export class RelationshipToLeakedKey {
  /**
   * Relationship to the leak the access token was found in.
   */
  "data": RelationshipToLeakedKeyData | null;

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
    data: {
      baseName: "data",
      type: "RelationshipToLeakedKeyData",
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
    return RelationshipToLeakedKey.attributeTypeMap;
  }

  public constructor() {}
}
