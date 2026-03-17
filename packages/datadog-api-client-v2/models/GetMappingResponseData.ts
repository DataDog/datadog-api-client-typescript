/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetMappingResponseDataAttributes } from "./GetMappingResponseDataAttributes";
import { GetMappingResponseDataType } from "./GetMappingResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object containing the resource type and attributes for the get mapping response.
 */
export class GetMappingResponseData {
  /**
   * Attributes of the get mapping response, containing the list of configured entity attributes.
   */
  "attributes"?: GetMappingResponseDataAttributes;
  /**
   * Unique identifier for the get mapping response resource.
   */
  "id"?: string;
  /**
   * Get mappings response resource type.
   */
  "type": GetMappingResponseDataType;

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
      type: "GetMappingResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetMappingResponseDataType",
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
    return GetMappingResponseData.attributeTypeMap;
  }

  public constructor() {}
}
