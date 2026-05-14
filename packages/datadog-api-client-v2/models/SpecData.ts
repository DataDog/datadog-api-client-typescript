/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpecAttributes } from "./SpecAttributes";
import { SpecType } from "./SpecType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single API spec resource.
 */
export class SpecData {
  /**
   * Attributes of an API spec.
   */
  "attributes"?: SpecAttributes;
  /**
   * The unique identifier of the spec.
   */
  "id"?: string;
  /**
   * Type of the spec resource.
   */
  "type": SpecType;

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
      type: "SpecAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SpecType",
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
    return SpecData.attributeTypeMap;
  }

  public constructor() {}
}
