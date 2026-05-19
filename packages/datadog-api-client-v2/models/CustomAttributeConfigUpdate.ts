/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomAttributeConfigResourceType } from "./CustomAttributeConfigResourceType";
import { CustomAttributeConfigUpdateAttributes } from "./CustomAttributeConfigUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a custom attribute configuration.
 */
export class CustomAttributeConfigUpdate {
  /**
   * Attributes that can be updated on a custom attribute configuration. All fields are optional; only provided fields are changed.
   */
  "attributes"?: CustomAttributeConfigUpdateAttributes;
  /**
   * JSON:API resource type for custom attribute configurations.
   */
  "type": CustomAttributeConfigResourceType;

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
      type: "CustomAttributeConfigUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "CustomAttributeConfigResourceType",
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
    return CustomAttributeConfigUpdate.attributeTypeMap;
  }

  public constructor() {}
}
