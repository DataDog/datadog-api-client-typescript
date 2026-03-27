/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsApiMultistepSubtestAttributes } from "./SyntheticsApiMultistepSubtestAttributes";
import { SyntheticsApiMultistepSubtestType } from "./SyntheticsApiMultistepSubtestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a Synthetic API multistep subtest.
 */
export class SyntheticsApiMultistepSubtestData {
  /**
   * Attributes of a Synthetic API multistep subtest.
   */
  "attributes"?: SyntheticsApiMultistepSubtestAttributes;
  /**
   * The public ID of the subtest.
   */
  "id"?: string;
  /**
   * Type of the subtest resource.
   */
  "type"?: SyntheticsApiMultistepSubtestType;

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
      type: "SyntheticsApiMultistepSubtestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsApiMultistepSubtestType",
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
    return SyntheticsApiMultistepSubtestData.attributeTypeMap;
  }

  public constructor() {}
}
