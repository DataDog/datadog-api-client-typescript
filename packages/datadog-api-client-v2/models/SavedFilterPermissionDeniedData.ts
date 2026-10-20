/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SavedFilterPermissionDeniedAttributes } from "./SavedFilterPermissionDeniedAttributes";
import { SavedFilterPermissionDeniedType } from "./SavedFilterPermissionDeniedType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The caller lacks edit permission on one or more feature flags that reference this saved filter.
 */
export class SavedFilterPermissionDeniedData {
  /**
   * The caller lacks edit permission on one or more feature flags that reference this saved filter.
   */
  "attributes": SavedFilterPermissionDeniedAttributes;
  /**
   * The ID of the saved filter.
   */
  "id": string;
  /**
   * The resource type for this saved filter update error.
   */
  "type": SavedFilterPermissionDeniedType;

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
      type: "SavedFilterPermissionDeniedAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "SavedFilterPermissionDeniedType",
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
    return SavedFilterPermissionDeniedData.attributeTypeMap;
  }

  public constructor() {}
}
