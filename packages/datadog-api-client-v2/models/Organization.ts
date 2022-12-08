/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrganizationAttributes } from "./OrganizationAttributes";
import { OrganizationsType } from "./OrganizationsType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Organization object.
 */
export class Organization {
  /**
   * Attributes of the organization.
   */
  "attributes"?: OrganizationAttributes;
  /**
   * ID of the organization.
   */
  "id"?: string;
  /**
   * Organizations resource type.
   */
  "type": OrganizationsType | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "OrganizationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OrganizationsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Organization.attributeTypeMap;
  }

  public constructor() {}
}
