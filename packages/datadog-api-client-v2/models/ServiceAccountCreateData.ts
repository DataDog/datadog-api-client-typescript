/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceAccountCreateAttributes } from "./ServiceAccountCreateAttributes";
import { UserRelationships } from "./UserRelationships";
import { UsersType } from "./UsersType";

export class ServiceAccountCreateData {
  "attributes": ServiceAccountCreateAttributes;
  "relationships"?: UserRelationships;
  "type": UsersType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    attributes: {
      baseName: "attributes",
      type: "ServiceAccountCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UserRelationships",
    },
    type: {
      baseName: "type",
      type: "UsersType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return ServiceAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
