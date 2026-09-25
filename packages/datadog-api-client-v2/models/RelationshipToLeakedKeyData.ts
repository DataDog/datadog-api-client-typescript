/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LeakedKeyType } from "./LeakedKeyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to the leak the access token was found in.
 */
export class RelationshipToLeakedKeyData {
  /**
   * A unique identifier that represents the leak.
   */
  "id": string;
  /**
   * The definition of LeakedKeyType object.
   */
  "type": LeakedKeyType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LeakedKeyType",
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
    return RelationshipToLeakedKeyData.attributeTypeMap;
  }

  public constructor() {}
}
