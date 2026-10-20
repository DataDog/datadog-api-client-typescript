/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchSavedFilterAttributes } from "./PatchSavedFilterAttributes";
import { SavedFilterDataType } from "./SavedFilterDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The saved filter fields to update.
 */
export class PatchSavedFilterData {
  /**
   * Fields to update. At least one of `name`, `description`, or `targeting_rules` must have a non-null value. Omitted or null fields are preserved. The creation type cannot be changed.
   */
  "attributes": PatchSavedFilterAttributes;
  /**
   * The saved filter resource type.
   */
  "type": SavedFilterDataType;

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
      type: "PatchSavedFilterAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SavedFilterDataType",
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
    return PatchSavedFilterData.attributeTypeMap;
  }

  public constructor() {}
}
