/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NodeTypesResponseDataAttributes } from "./NodeTypesResponseDataAttributes";
import { NodeTypesResponseDataType } from "./NodeTypesResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The primary data object in the node types response.
 */
export class NodeTypesResponseData {
  /**
   * The attributes of the node types response, containing the list of node type definitions for the requested language.
   */
  "attributes": NodeTypesResponseDataAttributes;
  /**
   * The unique identifier of the node types response resource.
   */
  "id": string;
  /**
   * Get node types response resource type.
   */
  "type": NodeTypesResponseDataType;

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
      type: "NodeTypesResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NodeTypesResponseDataType",
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
    return NodeTypesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
