/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserOrgsSerializableAttributes } from "./UserOrgsSerializableAttributes";
import { UserOrgsSerializableType } from "./UserOrgsSerializableType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UserOrgsSerializable` object.
 */
export class UserOrgsSerializable {
  /**
   * The definition of `UserOrgsSerializableAttributes` object.
   */
  "attributes"?: UserOrgsSerializableAttributes;
  /**
   * The `UserOrgsSerializable` `id`.
   */
  "id"?: string;
  /**
   * The definition of `UserOrgsSerializableType` object.
   */
  "type": UserOrgsSerializableType;

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
      type: "UserOrgsSerializableAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UserOrgsSerializableType",
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
    return UserOrgsSerializable.attributeTypeMap;
  }

  public constructor() {}
}
