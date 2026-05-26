/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetAstRequestDataAttributes } from "./GetAstRequestDataAttributes";
import { GetAstRequestDataType } from "./GetAstRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The primary data object in the get-AST request.
 */
export class GetAstRequestData {
  /**
   * The attributes of the get-AST request, containing the source code to parse.
   */
  "attributes": GetAstRequestDataAttributes;
  /**
   * An optional identifier for the get-AST request resource.
   */
  "id"?: string;
  /**
   * Get AST request resource type.
   */
  "type": GetAstRequestDataType;

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
      type: "GetAstRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetAstRequestDataType",
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
    return GetAstRequestData.attributeTypeMap;
  }

  public constructor() {}
}
