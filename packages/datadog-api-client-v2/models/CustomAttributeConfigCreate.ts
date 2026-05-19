/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomAttributeConfigAttributesCreate } from "./CustomAttributeConfigAttributesCreate";
import { CustomAttributeConfigResourceType } from "./CustomAttributeConfigResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating a custom attribute configuration.
 */
export class CustomAttributeConfigCreate {
  /**
   * Attributes required to create a custom attribute configuration.
   */
  "attributes": CustomAttributeConfigAttributesCreate;
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
      type: "CustomAttributeConfigAttributesCreate",
      required: true,
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
    return CustomAttributeConfigCreate.attributeTypeMap;
  }

  public constructor() {}
}
