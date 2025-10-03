/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomAttributeConfigResourceAttributes } from "./CustomAttributeConfigResourceAttributes";
import { CustomAttributeConfigResourceType } from "./CustomAttributeConfigResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CustomAttributeConfig` object.
 */
export class CustomAttributeConfig {
  /**
   * Custom attribute resource attributes
   */
  "attributes"?: CustomAttributeConfigResourceAttributes;
  /**
   * Custom attribute configs identifier
   */
  "id"?: string;
  /**
   * Custom attributes config JSON:API resource type
   */
  "type"?: CustomAttributeConfigResourceType;

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
      type: "CustomAttributeConfigResourceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomAttributeConfigResourceType",
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
    return CustomAttributeConfig.attributeTypeMap;
  }

  public constructor() {}
}
