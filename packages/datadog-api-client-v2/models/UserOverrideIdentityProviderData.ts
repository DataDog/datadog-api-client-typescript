/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserOverrideIdentityProviderAttributes } from "./UserOverrideIdentityProviderAttributes";
import { UserOverrideIdentityProviderDataType } from "./UserOverrideIdentityProviderDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object representing a user identity provider override.
 */
export class UserOverrideIdentityProviderData {
  /**
   * Attributes of an identity provider override for a user.
   */
  "attributes": UserOverrideIdentityProviderAttributes;
  /**
   * The unique identifier of the identity provider.
   */
  "id": string;
  /**
   * The resource type for identity providers.
   */
  "type": UserOverrideIdentityProviderDataType;

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
      type: "UserOverrideIdentityProviderAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserOverrideIdentityProviderDataType",
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
    return UserOverrideIdentityProviderData.attributeTypeMap;
  }

  public constructor() {}
}
