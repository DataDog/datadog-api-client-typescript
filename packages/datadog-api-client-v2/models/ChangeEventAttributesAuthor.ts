/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventAttributesAuthorType } from "./ChangeEventAttributesAuthorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The entity that made the change.
 */
export class ChangeEventAttributesAuthor {
  /**
   * The name of the user or system that made the change.
   */
  "name"?: string;
  /**
   * The type of the author.
   */
  "type"?: ChangeEventAttributesAuthorType;

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
    },
    type: {
      baseName: "type",
      type: "ChangeEventAttributesAuthorType",
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
    return ChangeEventAttributesAuthor.attributeTypeMap;
  }

  public constructor() {}
}
