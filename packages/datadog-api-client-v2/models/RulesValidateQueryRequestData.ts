/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RulesValidateQueryRequestDataAttributes } from "./RulesValidateQueryRequestDataAttributes";
import { RulesValidateQueryRequestDataType } from "./RulesValidateQueryRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `RulesValidateQueryRequestData` object.
 */
export class RulesValidateQueryRequestData {
  /**
   * The definition of `RulesValidateQueryRequestDataAttributes` object.
   */
  "attributes"?: RulesValidateQueryRequestDataAttributes;
  /**
   * The `RulesValidateQueryRequestData` `id`.
   */
  "id"?: string;
  /**
   * Validate query resource type.
   */
  "type": RulesValidateQueryRequestDataType;

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
      type: "RulesValidateQueryRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RulesValidateQueryRequestDataType",
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
    return RulesValidateQueryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
