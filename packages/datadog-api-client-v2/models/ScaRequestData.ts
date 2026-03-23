/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScaRequestDataAttributes } from "./ScaRequestDataAttributes";
import { ScaRequestDataType } from "./ScaRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object in an SCA request, containing the dependency graph attributes and request type.
 */
export class ScaRequestData {
  /**
   * The attributes of an SCA request, containing dependency graph data, vulnerability information, and repository context.
   */
  "attributes"?: ScaRequestDataAttributes;
  /**
   * An optional identifier for this SCA request data object.
   */
  "id"?: string;
  /**
   * The type identifier for SCA dependency analysis requests.
   */
  "type": ScaRequestDataType;

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
      type: "ScaRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ScaRequestDataType",
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
    return ScaRequestData.attributeTypeMap;
  }

  public constructor() {}
}
