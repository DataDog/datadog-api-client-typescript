/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCustomAttributesAuthorType } from "./ChangeEventCustomAttributesAuthorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON Object representing the entity which made the change. Currently it only supports
 * `user` and `system` author type.
 */
export class ChangeEventCustomAttributesAuthor {
  /**
   * Author's name. Limited to 128 characters.
   */
  "name": string;
  /**
   * Author's type.
   */
  "type": ChangeEventCustomAttributesAuthorType;

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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeEventCustomAttributesAuthorType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeEventCustomAttributesAuthor.attributeTypeMap;
  }

  public constructor() {}
}
